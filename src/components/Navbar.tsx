import React, { useEffect, useState, useCallback } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar: React.FC = () => {
  const [navbarColor, setNavbarColor] = useState('transparent');

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    let color = 'transparent';
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        switch (entry.target.id) {
          case 'about':
            color = 'primary.main';
            break;
          case 'projects':
            color = 'transparent';
            break;
          case 'contact':
            color = 'primary.main';
            break;
          default:
            color = 'transparent';
        }
      }
    });
    setNavbarColor(color);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.6,
    });

    const sections = ['about', 'projects', 'contact'].map(id => document.getElementById(id));
    sections.forEach(section => section && observer.observe(section));

    return () => {
      sections.forEach(section => section && observer.unobserve(section));
    };
  }, [handleIntersect]);

  const handleHomeClick = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: navbarColor,
        transition: 'background-color 0.5s ease',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h5"
          sx={{ flexGrow: 1, cursor: 'pointer', color: 'inherit' }}
          onClick={handleHomeClick}
        >
          Ivana Nedelkova
        </Typography>

        <Box>
          {['about', 'projects', 'contact'].map((sectionId) => (
            <Button
              key={sectionId}
              color="inherit"
              onClick={() =>
                document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
              }
              sx={{ marginRight: sectionId !== 'contact' ? 2 : 0 }}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1).replace('-', ' ')}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
