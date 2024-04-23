
// imports the Express framework which is a web application framework for Node.js
const express = require('express');
// import the HTTP module which provides functionality for creating HTTP servers and clients
const http = require('http');
// import the Socket.io library which enable real-time bidirectional communication between web client and servers
const socketIo = require('socket.io');
//import Mongoose, an object data modeling (ODM) library for MongoDB and Node.js
const {MongoClient} = require('mongodb');
//Imports the body and validationResult objects from the express-validator library, which provides middleware for validation of incoming request bodies
const { body, validationResult } = require('express-validator')


const app = express();
const server = http.createServer(app);
//Creates a Socket.io server instance and binds it to the HTTP server
const io = socketIo(server);
// Adds middleware to parse JSON-encoded request bodies
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const PORT = process.env.PORT || 27017;

const url = 'mongodb://mitrashabani:LittleLemon@littlelemoncluster.yka71wt.mongodb.net/?retryWrites=true&w=majority&appName=LittleLemonCluster';

app.get('/', (req, res) => {
    res.send('Welcome to Little Lemon!');
  });
  app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); // Return a 204 response to indicate no content
  });

  app.post('/api/booking', [
    body('date').notEmpty().isISO8601(),
    body('time').notEmpty(),
    body('guests').notEmpty().isInt({ min: 1 }),
    body('occasion').notEmpty(),
    body('email').notEmpty().isEmail(),
  ], async (req, res) => {
    try {
      console.log("server request body:", req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { date, time, guests, occasion, email } = req.body;
      const newReservation = {
        date,
        time,
        guests,
        occasion,
        email,
      };
  
      // Connect to MongoDB and insert the new reservation
      const client = new MongoClient(url);

      const db = client.db('LittleLemonCluster');
      const reservationCollection = db.collection('booking');
      console.log("reservation c :" ,reservationCollection)
      
      const result = await reservationCollection.insertOne(newReservation);
      await client.close();
      console.log('Insert result:', result);

      io.emit('newReservation', newReservation);
      res.status(201).json({ message: 'Reservation saved successfully' });
    } catch (error) {
      console.error('Error saving reservation:', error);
      res.status(500).send('Server Error');
    }
  });
// Starts the HTTP server to listen for incoming requests on the specified port
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});