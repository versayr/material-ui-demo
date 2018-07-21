import React, { Component }                 from 'react';
import AddIcon                              from '@material-ui/icons/Add';
import DeleteIcon                           from '@material-ui/icons/Delete';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { 
  Paper, 
  AppBar,
  FormControl,
  Typography,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#02B087',
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ['first task', 'second task', 'another task']
    };
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
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
            </AppBar>
            <form>
              <FormControl
                fullWidth
              >
                <Input
                  autoFocus="true"
                  endAdornment={<InputAdornment position="end"><AddIcon /></InputAdornment>}
                />
              </FormControl>
            </form>
            <List>
              <ListItem button>
                <ListItemText primary={this.state.todo[0]} />
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText primary={this.state.todo[1]} />
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemText primary={this.state.todo[2]} />
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
              </ListItem>
            </List>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
