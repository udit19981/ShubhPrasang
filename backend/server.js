const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:admin@cluster0.xy8yjbh.mongodb.net/shubh?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

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


const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


