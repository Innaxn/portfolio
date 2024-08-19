import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import Section from '../components/Section';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSnackbarMessage('Please fill in all required fields.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    const key = import.meta.env.VITE_API_KEY;
    console.log(key);
    const json = JSON.stringify({
      ...formData,
      access_key: key,
    });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSnackbarMessage('Message sent successfully!');
        setSnackbarSeverity('success');
      } else {
        throw new Error('Failed to send message.');
      }
    } catch {
      setSnackbarMessage('Error sending message. Please try again.');
      setSnackbarSeverity('error');
    }

    setSnackbarOpen(true);
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  return (
    <Section
      id="contact"
      title="Contact"
      sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'secondary.main',
      }}
    >
      <Typography variant="h2" gutterBottom>
        Get in Touch
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: '100%',
          border: '2px dashed #d0c672',
          borderRadius: 2,
          padding: 3,
          boxShadow: 2,
        }}
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Company"
          name="company"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.company}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Message"
          name="message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Section>
  );
};

export default ContactForm;
