import React from 'react';
import { Container, Box } from '@mui/material';
import { SxProps, Theme } from '@mui/system';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  sx?: SxProps<Theme>; 
}

const Section: React.FC<SectionProps> = ({ id, children, sx }) => {
  return (
    <Box
      id={id}
      sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        ...sx,
      }}
    >
      <Container>
        {children}
      </Container>
      
    </Box>
  );
};

export default Section;
