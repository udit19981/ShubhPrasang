const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb+srv://Uavaiya1998:Uavaiya1998@cluster0.0dfoies.mongodb.net/shubhprasang_admin')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Model
const User = mongoose.model('User', {
  username: String,
  password: String,
  email: String,
  phoneNumber: String,
  name: String
});

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


// Signup api
app.post('/signup', async (req, res) => {
  const { username, password, name, email, phoneNumber} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, name, email, phoneNumber, password: hashedPassword });
  await user.save();

  res.json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ userId: user._id }, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InNodWJocHJhc2hhbmciLCJpYXQiOjE1MTYyMzkwMjJ9.gMc4xj3EcLj3p57RZQLDGxVMvxGB8W83hXOI76rDLbg');
  res.json({ token });
});

const PORT = process.env.PORT || 4500;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

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



