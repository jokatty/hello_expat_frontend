import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function HomeContainer() {
  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={6}>
          <p>Hi</p>
        </Grid>
        <Grid item xs={6}>
          <p>hey</p>
        </Grid>
      </Grid>
    </Container>
  );
}
