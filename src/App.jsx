import { useState, useEffect } from 'react';
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, Menu, MenuItem, Select, Slider, TextField, Typography } from '@mui/material';
import './App.css';
import { FixedSizeList as List } from 'react-window';
function App() {
  const [username, setUsername] = useState("0qd6-jzeq-1vs0r-y8ul-4shr");
  const [password, setPassword] = useState('');
  const [helperText, setHelperText] = useState('');

  
  const generateRandomString = (length) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  
  const generateUsername = () => {
    const parts = [
      generateRandomString(4),
      generateRandomString(4),
      generateRandomString(5),
      generateRandomString(4),
      generateRandomString(4),
    ];
    setUsername(parts.join('-'));
  };

  
  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    
    let containsUsernameCharacter = false;
    for (let char of username) {
      if (newPassword.includes(char)) {
        containsUsernameCharacter = true;
        break;
      }
    }

    
    if (containsUsernameCharacter) {
      setHelperText("Password must not contain any part of the username.");
    } else {
      setHelperText('');
    }
  };


  const [value, setValue] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  
  const threshold = 9;
  const numbers = Array.from({ length: 365 * 30 }, (_, index) => index + 1); 

  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);  
    setMenuOpen(false); 
  };

  
  const formatTimePeriod = (item) => {
    const years = Math.floor(item / 365); 
    const months = Math.floor((item % 365) / 30); 
    const days = item % 30; 
    return `${years} years ${months} months ${days} days`;
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "#F5F5F5" }}>
      <Box sx={{ p: 2, background: "#fff" }}>
        <Typography sx={{ textAlign: "center", fontWeight: "bold", mb: 2, fontSize: "20px" }}>Create account</Typography>

        {/* for username */}
        <Box component="form">
          <Typography>Username</Typography>
          <Box>
            <TextField
              required
              size='small'
              helperText="Here's your generated username, remember it!"
              sx={{ mr: 2 }}
              value={username}
              disabled
            />
            <Button variant='contained' color='info' onClick={generateUsername}>⟳</Button>
          </Box>
        </Box>

        {/* for password */}
        <Box sx={{ mt: 2 }}>
          <Typography>Password</Typography>
          <Box>
            <TextField
              required
              size='small'
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              helperText={helperText}
              error={!!helperText}
            />
          </Box>
        </Box>

        {/* for age */}
        <Box sx={{ mt: 2 }}>
      <Typography>Age</Typography>
      <Box>
        <FormControl fullWidth size="small">
          <Select
            value={selectedValue}
            onChange={handleChange}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 400, 
                  width: 250, 
                }
              }
            }}
          >
            {/* Virtualized List for Age Selection */}
            <List
              height={300} 
              itemCount={numbers.length} 
              itemSize={50} 
              width={250} 
              style={{width:"100%"}}
            >
              {({ index, style }) => (
                <MenuItem key={numbers[index]} style={style} value={numbers[index]}>
                  {formatTimePeriod(numbers[index])}
                </MenuItem>
              )}
            </List>
          </Select>
        </FormControl>
      </Box>
    </Box>
        <Box sx={{ p: 1 }}>
          <Typography>Remember Password:    {value > threshold ? 'Yes' : 'No'} </Typography>
          <Slider
            value={value}
            min={0}
            max={10}
            step={1}
            onChange={handleSliderChange}

            valueLabelFormat={(value) => value}
            style={{ width: '100%' }}
          />
        </Box>

        <Box sx={{ display: "block" }}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: '#007bff', 
                  '&.Mui-checked': {
                    color: '#007bff', 
                  },
                }}
              />
            }
            label={
              <Typography variant="body1">
                I don't agree{' '}
                <span style={{ color: '#007bff' }}>in terms in agreement</span>
              </Typography>
            }
          />
        </Box>
        <Box sx={{ display: "block" }}>
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  color: '#007bff', 
                  '&.Mui-checked': {
                    color: '#007bff', 
                  },
                }}
              />
            }
            label={
              <Typography variant="body1">
                I agree{' '}
                <span style={{ color: '#007bff' }}>in terms in agreement</span>
              </Typography>
            }
          />
        </Box>
        <Button variant='contained' type='submit' fullWidth>Sign up</Button>
      </Box>
    </Container>
  );
}

export default App;
