import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        py: 2,
        px: 3,
        backgroundColor: 'primary.main',
        color: 'text.secondary',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ mb: 1 }}>
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Ivana Nedelkova. All rights reserved.
        </Typography>
      </Box>
      <Box>
        <IconButton
          component={Link}
          href="http://www.linkedin.com/in/ivana-nedelkova-059ba524a"
          target="_blank"
          rel="noopener"
          sx={{ color: 'text.secondary', mx: 1 }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component={Link}
          href="https://github.com/Innaxn"
          target="_blank"
          rel="noopener"
          sx={{ color: 'text.secondary', mx: 1 }}
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
