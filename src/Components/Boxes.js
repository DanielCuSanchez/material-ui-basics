import React from 'react'
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/material';

export const Boxes = () => {
  return (

    <Container>
    <h1>Boxes</h1>
      <Box mt={10} display='flex'
        flexDirection='column'
        alignItems='center'
        sx={{ bgcolor: '#cfe8fc', height: '50vh' }}
      >
        <Button style={{
          marginTop: '20px',
        }} variant="contained">Box fixed</Button>
      </Box>
      <Box
        sx={{ width: [100, 200, 800], bgcolor: '#cfe8fc', height: '50vh' }}
      >
        <Button style={{
          marginTop: '20px',
        }} variant="outlined">Box Responsivo</Button>
      </Box>
    </Container>
  )
}
