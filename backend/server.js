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
mongoose.connect('mongodb+srv://admin:admin@cluster0.bofkigt.mongodb.net/shubhprasang?retryWrites=true&w=majority')
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

// Signup api
app.post('/signup', async (req, res) => {
  const { username, password, name, email, phoneNumber} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ username, name, email, phoneNumber, password: hashedPassword });
  await user.save();

  res.json({ message: 'User registered successfully' });
});

// Login api
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
