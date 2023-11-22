const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
const User = require('./models/User')

const multer = require('multer');
const upload = multer({ dest: 'public/' }); // Set the destination folder for uploaded files


// Middleware
app.use(express.json());
app.use(cors());
app.use('/images', express.static('public/images'));


// MongoDB Connection
mongoose.connect("mongodb+srv://admin:admin@cluster0.xy8yjbh.mongodb.net/shubh?retryWrites=true&w=majority");

// Use the auth routes
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);


const Venue = mongoose.model('Venue', {
  occasionType: String,
  venueName: String,
  description: String,
  address: String,
  capacity: Number,
  acceptedPayments: [String],
  imageUrl: String,
});


// Wedding Events Model
const weddingEvents = mongoose.model('weddingEvents', {
  brideName: String,
  groomName: String,
  eventDate: Date,
  venue: String,
  email: String,
  phoneNumber: String
})  

// Wedding Events api
app.post('/wedding', async(req,res) =>{
  const {  brideName, groomName, eventDate, venue, email, phoneNumber} = req.body;

  const user = new weddingEvents({ brideName, groomName, eventDate, venue, email, phoneNumber });
  await user.save();

  res.json({ message: 'Wedding Event registered successfully' });

})

// birthday Events Model
const birthdayEvents = mongoose.model('birthdayEvents', {
  personName: String,
  eventDate: Date,
  venue: String,
  email: String,
  phoneNumber: String
})  

// birthday Events api
app.post('/birthday', async(req,res) =>{
  const {  personName, eventDate, venue, email, phoneNumber} = req.body;

  const user = new birthdayEvents({ personName, eventDate, venue, email, phoneNumber });
  await user.save();

  res.json({ message: 'Birthday Event registered successfully' });

})

// corporate Events Model
const corporateEvents = mongoose.model('corporateEvents', {
  companyName: String,
  eventDate: Date,
  venue: String,
  email: String,
  phoneNumber: String
})  

// corporate Events api
app.post('/corporate', async(req,res) =>{
  const {  companyName, eventDate, venue, email, phoneNumber} = req.body;

  const user = new corporateEvents({ companyName, eventDate, venue, email, phoneNumber });
  await user.save();

  res.json({ message: 'Corporate Event registered successfully' });

})


// Add Venue data to the Database
app.post('/api/venues', async (req, res) => {
  try {
    
    const newVenue = new Venue(req.body);
    // It will take the data from the user and save it to the mongoose. 
    await newVenue.save();
    res.status(201).json(newVenue);
  } catch (error) {
    console.error('Error saving Venue:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/upload-image', upload.single('image'), (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ error: 'No file uploaded' });
      return;
    }

    // You can create a unique filename or use other logic to generate a filename here
    const uniqueFilename = `${Date.now()}-${req.file.originalname}`;

    // Move the uploaded file to a permanent location (e.g., /public/images/)
    const targetPath = path.join(__dirname, 'public', 'images', uniqueFilename);

    // Move the file from the temporary location to the permanent location
    fs.renameSync(req.file.path, targetPath);

    // Construct the URL to the uploaded image
    const imageUrl = `/images/${uniqueFilename}`;

    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/halls/find/:id', async (req, res)=> {
    try{
        const venues=await Venue.findById(req.params.id)
        res.status(200).json(venues);
    }catch(err){
        next(err)
    }
  });

// Load Venue Data Route
app.get('/api/venues', async (req, res) => {
  try {
    // Retrieve all venues from the MongoDB database
    const venues = await Venue.find();
    res.json(venues);
  } catch (error) {
    console.error('Error loading Venue data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.delete('/api/venues/:id', async (req, res) => {
  const venueId = req.params.id;

  try {
    // Use mongoose to find and remove the venue by ID
    const deletedVenue = await Venue.findByIdAndRemove(venueId);

    if (!deletedVenue) {
      return res.status(404).json({ message: 'Venue not found' });
    }

    res.json({ message: 'Venue deleted successfully', deletedVenue });
  } catch (error) {
    console.error('Error deleting venue:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.put('/api/venues/:id', async (req, res) => {
  const venueId = req.params.id;
  const updatedVenueData = req.body;

  try {
    const updatedVenue = await Venue.findByIdAndUpdate(venueId, updatedVenueData, { new: true });

    if (!updatedVenue) {
      return res.status(404).json({ message: 'Venue not found' });
    }

    res.json({ message: 'Venue updated successfully', updatedVenue });
  } catch (error) {
    console.error('Error updating venue:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find(); 
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Count users API endpoint
app.get('/api/users/count', async (req, res) => {
  try {
    const userCount = await User.countDocuments();
    res.json({ count: userCount });
  } catch (error) {
    console.error('Error counting users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Count venues API endpoint
app.get('/api/venues/count', async (req, res) => {
  try {
    const venueCount = await Venue.countDocuments();
    res.json({ count: venueCount });
  } catch (error) {
    console.error('Error counting venues:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Count venues API endpoint
app.get('/api/organizer/count', async (req, res) => {
  try {
    const organizerCount = await Organizer.countDocuments();
    res.json({ count: organizerCount });
  } catch (error) {
    console.error('Error counting Organizer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Add Venue data to the Database
app.post('/api/organizers', async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      address,
      email,
      contactNumber,
      website
    } = req.body;

    // Create a new Organizer instance
    const newOrganizer = new Organizer({
      name,
      description,
      category,
      address,
      email,
      contactNumber,
      website
    });

    // Save the organizer data
    await newOrganizer.save();

    // Respond with the saved organizer data
    res.status(201).json(newOrganizer);
  } catch (error) {
    console.error('Error saving Organizer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Fetch Organizers API endpoint
app.get('/api/organizers', async (req, res) => {
  try {
    const organizers = await Organizer.find();
    res.json(organizers);
  } catch (error) {
    console.error('Error fetching organizers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const Organizer = mongoose.model('Organizer', {
  name: String,
  description: String,
  category: String,
  address: String,
  email: String,
  contactNumber: String,
  website: String,
});

// Fetch Organizers API endpoint
app.get('/api/organizers', async (req, res) => {
  try {
    const organizers = await Organizer.find();
    res.json(organizers);
  } catch (error) {
    console.error('Error fetching organizers:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.delete('/api/organizers/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Organizer.findByIdAndRemove(id);
    res.json({ message: 'Organizer removed successfully' });
  } catch (error) {
    console.error('Error removing organizer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.put('/api/organizers/:id', async (req, res) => {
  const { id } = req.params;
  const updatedOrganizer = req.body;

  try {
    const organizer = await Organizer.findByIdAndUpdate(id, updatedOrganizer, { new: true });
    res.json(organizer);
  } catch (error) {
    console.error('Error updating organizer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Paypal Checkout Code starts here
// let collection;

// client.connect().then(() => {
//   collection = client.db('CapstoneProject').collection('paypal_orders');
//   console.log('Connected to MongoDB');
// });

// paypal.configure({
//   mode: 'sandbox', // Change to 'live' for production
//   client_id: 'AarqROJkVgFGPqDblWe0Ct1c6rLCaADk-8Jypc5SGPcov3AMwqDOZMlvOKLngaGOCS_E_vJ2_9wn6FM_',
//   client_secret: 'ECTgnsWEvw3dU0uO47tZq3l0TXk8S4IXFat7sOqLpDu7PQc9pKqtq-ezViGcc7zNSLj61oez7IaaHRNs',
// });
// app.use(
//   '/pay',
//   createProxyMiddleware({
//     target: 'http://localhost:4500', // Replace with your Node.js server URL
//     changeOrigin: true,
//   })
// );
// app.post('/pay', (req, res) => {
//   const { price, productName } = req.body;

//   const create_payment_json = {
//     intent: 'sale',
//     payer: {
//       payment_method: 'paypal',
//     },
//     redirect_urls: {
//       return_url: 'http://localhost:4500/success',
//       cancel_url: 'http://localhost:4500/cancel',
//     },
//     transactions: [
//       {
//         item_list: {
//           items: [
//             {
//               name: productName,
//               sku: '001',
//               price: price,
//               currency: 'CAD',
//               quantity: 1,
//             },
//           ],
//         },
//         amount: {
//           currency: 'CAD',
//           total: price,
//         },
//         description: 'This is the payment description.',
//       },
//     ],
//   };

//   paypal.payment.create(create_payment_json, function (error, payment) {
//     if (error) {
//       throw error;
//     } else {
//       for (let i = 0; i < payment.links.length; i++) {
//         if (payment.links[i].rel === '/') {
//           collection.insertOne({ paymentId: payment.id, status: 'created' });
//           res.send(payment.links[i].href);
//         }
//       }
//     }
//   });
// });


