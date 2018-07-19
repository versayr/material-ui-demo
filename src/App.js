import React, { Component } from 'react';
import './App.css';

import { 
  Paper, 
  AppBar,
  Typography,
  Button, 
  TextField
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Paper>
          <AppBar position="static">
            <Typography 
              variant="display1" 
              color="inherit"
              gutterBottom
            >
              Check.ly
            </Typography>
            <Typography 
              variant="subheading" 
              color="inherit"
              gutterBottom
            >
              The Material-UI Mockup
            </Typography>
          </AppBar>
          <form>
            <TextField
              autoFocus="true"
            />
            <Button
              type="submit"
              color="primary"
              variant="fab"
            >
              <AddIcon />
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default App;
