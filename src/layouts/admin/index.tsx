import React from 'react';
import Header from '@/components/Header';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {/* Toolbar here creates an invisible spacer matching the header height */}
      <Toolbar />
      <Container sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
}
