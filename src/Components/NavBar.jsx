import React from 'react';
import {
  AppBar, Toolbar, Typography, Stack, Button,
} from '@mui/material';

export default function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }} align="left">
          helloExpat
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button color="inherit">Q&A</Button>
          <Button color="inherit">Experiences</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
