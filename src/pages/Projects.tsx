import React from 'react';
import Section from '../components/Section';
import { projects } from '../data/projects';
import { Typography, Box, Chip, Grid } from '@mui/material';

const projectContainerStyle = {
  marginBottom: '2rem',
  padding: '1rem',
};

const titleStyle = {
  marginBottom: '1rem',
};

const projectContentStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
};

const mediaStyle = {
  flexShrink: 0,
  width: '25%',
  height: '40%',
  objectFit: 'cover',
  marginRight: '1rem',
};

const textStyle = {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const Projects: React.FC = () => {
  return (
    <Section
      id="projects"
      title="Projects"
      sx={{
        backgroundColor: 'primary.main',
        py: 8,
        minHeight: '100vh',
      }}
    >
      <Typography variant="h2" display={'flex'} justifyContent={'center'} gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} key={project.id}>
            <Box sx={projectContainerStyle}>
              <Typography variant="h4" component="div" sx={titleStyle}>
                {project.title}
              </Typography>
              <Box sx={projectContentStyle}>
                <Box
                  component="img"
                  sx={mediaStyle}
                  src={project.image}
                  alt={project.title}
                />
                <Box sx={textStyle}>
                  <Typography variant="body2" color="text.primary" sx={{ mb: 1 }}>
                    {project.description}
                  </Typography>
                  
                  <Box>
                    {project.technologies.map((tech, index) => (
                      <Chip
                        color='secondary'
                        key={index}
                        label={tech}
                        sx={{ marginRight: 1, marginTop: 0.5 }}
                      />
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Projects;
