import React from 'react';
import { Typography, Button, IconButton, Box } from '@mui/material';
import cvFile from '../assets/Cv.pdf';
import Section from '../components/Section';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Section
      id="home"
      title="Home"
      sx={{
        backgroundImage: 'url(/homepage.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        paddingTop: '20vh',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        sx={{ maxWidth: '600px', width: '100%' }}  >
        <Typography variant="h3" color="text.secondary" sx={{ mb: 2 }}>
          Hi, I'm Ivana Nedelkova
        </Typography>
        <Typography variant="h3" color="text.secondary" sx={{ mb: 4 }}>
          Welcome to my portfolio
        </Typography>
        <a href={cvFile} download="Ivana-Nedelkova-CV.pdf">
          <Button variant="contained" color="primary">
            Check my CV
          </Button>
        </a>
      </Box>

      <IconButton
        onClick={() => scrollToSection('about')}
        sx={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'primary.main',
          fontSize: 40,
          transition: 'transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            color: 'primary.main',
            transform: 'translateX(-50%) scale(1.2)',
            boxShadow: '0 4px 15px text.primary',
          },
        }}
      >
        <ArrowDownwardIcon />
      </IconButton>
    </Section>
  );
};

export default Home;
