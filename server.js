const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

// import routes
const productsRoutes = require('./routes/products.routes');
const ordersRoutes = require('./routes/orders.routes');


const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', productsRoutes);
app.use('/api', ordersRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});


app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
})

// connects our backend code with the database
mongoose.connect('mongodb+srv://justa7:S2foQTFSXdw31UdY@cluster0.kir6w.mongodb.net/DreamCakeDB?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});