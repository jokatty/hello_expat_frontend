import React from 'react';
import {
  Container, TextField, TextareaAutosize, Button,
} from '@mui/material';

export default function Form() {
  return (
    <Container>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <TextareaAutosize
        aria-label="minimum height"
        minRows={3}
        placeholder="Minimum 3 rows"
        style={{ width: 200 }}
      />
      <Button variant="contained">Post</Button>
    </Container>

  );
}
