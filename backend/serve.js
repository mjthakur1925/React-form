const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'http://localhost:3000/',
  user: 'client',
  password: '1925062',
  database: 'table information',
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define the endpoint for handling the form submission
app.post('/submit', (req, res) => {
  const { name, email, address, phone, dob } = req.body;

  // Perform form validation here if needed

  // Prepare the SQL query
  const sql = 'INSERT INTO users (name, email, address, phone, dob) VALUES (?, ?, ?, ?, ?)';
  const values = [name, email, address, phone, dob];

  // Execute the SQL query
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Failed to save data' });
      return;
    }
    console.log('Data saved successfully');
    res.status(200).json({ message: 'Data saved successfully' });
  });
});

// Start the server
const port = 3000; // Replace with your desired port number
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
