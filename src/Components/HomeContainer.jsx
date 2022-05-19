import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomeContainer() {
  // style object
  const container = {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center',
    marginTop: '15vh',
  };

  /**
   * on click direct to /post-question route
   */
  const navigate = useNavigate();

  const questionRoute = () => {
    navigate('/question');
  };
  return (
    <Container maxWidth="sm" style={container}>
      <Grid container>
        <Grid item xs={6}>
          <Button
            variant="contained"
            onClick={() => questionRoute()}
          >
            Post a question

          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained">Share an experience</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
