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
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ['first task', 'second task']
    };
  }

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
              mini
            >
              <AddIcon />
            </Button>
          </form>
          <List>
            <ListItem button>
              <ListItemText primary={this.state.todo[0]} />
            </ListItem>
            <ListItem button>
              <ListItemText primary={this.state.todo[1]} />
            </ListItem>
          </List>
        </Paper>
      </div>
    );
  }
}

export default App;
