import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';

import Amplify from 'aws-amplify';

const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "10px",
  },
  title: {
    flexGrow: 1,
    height: 48
  },
};

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuAnchorEl: null
    };

  }

  openMenu = (clickEvent) => {
    this.setState({
      menuAnchorEl: clickEvent.target
    })
  }

  closeMenu = () => {
    this.setState({
      menuAnchorEl: null
    })
  }

  handleLogOut() {
    Amplify.Auth.signOut({ global: true })
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }

  render() {

  
    return (
    <div className={this.props.classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={this.props.classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={this.props.classes.title}>
            Chatbot Chuck
          </Typography>
          {this.props.isLoggedIn ? (
            <div>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Box marginRight="20px">
                  <Typography variant="h6" >
                    Hello, {this.props.userName?this.props.userName:"Who are you?"}
                  </Typography>
                </Box>
              <Box>
              <IconButton
                aria-label="Account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.openMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              </Box>
              <Menu
                id="menu-appbar"
                anchorEl={this.state.menuAnchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(this.state.menuAnchorEl)}
                onClose={this.closeMenu}
              >
                <MenuItem onClick={this.handleLogOut}>Logout</MenuItem>
              </Menu>
              </Box>
            </div>
          ) : (
            <div></div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string
}

export default withStyles(styles)(NavBar);
