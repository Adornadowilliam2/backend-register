import { useState } from 'react'
import { Box, Button, Container, FormControlLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import './App.css'


function App() {


  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#F5F5F5" }}>
      <Box sx={{ p: 2, background: "#fff" }}>
        <Typography sx={{ textAlign: "center", fontWeight: "bold", mb: 2, fontSize: "20px" }}>Create account</Typography>

        {/* for username */}
        <Box >
          <Typography >Username</Typography>
          <Box >
            <TextField required size='small' helperText="Here's your generated username, remember it!" sx={{mr:2}}/>
            <Button variant='contained' color='info'>⟳</Button>
          </Box>
        </Box>
        {/* for password */}
        <Box sx={{mt:2}}>
          <Typography >Password</Typography>
          <Box >
            <TextField required size='small' fullWidth/>
          </Box>
          
        </Box>

        {/* for age */}
        <Box sx={{mt:2}}>
          <Typography >Age</Typography>
          <Box >
            <Select fullWidth size='small'>
              <MenuItem>1 years 0 month 0 days</MenuItem>
            </Select>
          </Box>
        </Box>
        {/* remember the password */}

      </Box>
    </Container>
  )
}

export default App
