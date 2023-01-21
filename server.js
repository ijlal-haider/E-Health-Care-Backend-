require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const doctorRoutes = require('./routes/doctors')
const userRoutes = require('./routes/user')
const adminRoutes = require('./routes/admins')
const reviewRoutes = require('./routes/reviews')
const prescriptionRoutes = require('./routes/prescription')
const appointments = require('./routes/appointments')
const cors = require('cors');
const connectDB = require('./config/db');
const FormData = require('express-form-data')
const User = require('./models/UserModel')

const app = express();


//Middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.urlencoded({extednded: true}))
app.use(FormData.parse())

//Middleware { as middleware before your POST request handler. That will read the JSON body of the request, parse it. } 
app.use(express.json())

//routes
app.use('/api/users', userRoutes)
app.use('/api/doctors', doctorRoutes)
app.use('/api/admins', adminRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/prescriptions', prescriptionRoutes)
app.use('/api/appointments', appointments)

// app.use('/api/login', userRoutes)



// --- Connect with DB
connectDB().then(()=> {
  app.listen(process.env.PORT, () => {
      console.log(`Virtual Hospital app Started at`,process.env.PORT)
    }) }) 

// Login
    app.post('/api/login', async (req, res) => {
      const body = req.body;
      console.log('req.body', body);
      const email = body.email;
      // lets check if email exists
      const result = await User.findOne({"email": email});
      if (!result) // this means result is null
      {
          res.status(401).send({
              message: 'This user doesnot exists. Please signup first'
          });
      } else {
          // email did exist
          // so lets match password
          if (body.password === result.password) {
              // great, allow this user access
              console.log('match');
              res.send({message: 'success',
              user:result
            });
          } else {
              console.log('password doesnot match');
              res.status(401).send({message: 'Wrong email or Password'});
          }
      }
  });   