import React from 'react';
import Section from '../components/Section';
import { Typography, Box } from '@mui/material';

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Me"
      sx={{backgroundColor: 'secondary.main'}}
    >
        <Box sx={{
         border: '2px dashed #d0c672',
         padding: '2rem',
         borderRadius: 2,
         margin: '0 auto',
         maxWidth: '800px',
         width: '100%',
      }}>
      <Typography variant="h2" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1" paragraph>
        I am passionate about software engineering and dedicated to continuous learning and growth. My goal is to enhance my skills and contribute to innovative projects. Explore my journey through my projects, experience, and skills to learn more about my work in technology!
        Originally from Bulgaria, I am currently studying ICT and Software Engineering at Fontys University in the Netherlands. I am also pursuing a pre-master’s degree in Cybersecurity and AI at Radboud University.
        Although my high school background was in humanities rather than programming, my interest in technology sparked a deep passion that has driven me ever since. I thrive on learning new things and actively seek out new challenges to expand my horizons. :)
      </Typography>
      </Box>
    </Section>
  );
};

export default About;
