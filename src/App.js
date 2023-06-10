import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // Form validation failed
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/submit', {
        name,
        email,
        address,
        phone,
        dob,
      });
      console.log('Server response:', response.data);
      // Reset form fields
      setName('');
      setEmail('');
      setAddress('');
      setPhone('');
      setDob('');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  const validateForm = () => {
    // Implement form validation logic here
    // ...
    return true;
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Date of Birth (DD/MM/YYYY):
          <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

