import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

export default function HomeContainer() {
  // style object
  const container = {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    marginTop: '15vh',
  };
  return (
    <Container maxWidth="sm" style={container}>
      <Grid container>
        <Grid item xs={6}>
          <Button variant="contained">Post a question</Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained">Share an experience</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
