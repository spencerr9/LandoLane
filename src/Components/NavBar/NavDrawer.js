import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

import './NavDrawer.css';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <ListItem button>
            <ListItemText primary={<Link to='/'>Home</Link>} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={<Link to='/familyportraits'>Family & Portraits</Link>} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={<Link to='/couples'>Couples</Link>} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={<Link to='/live'>live</Link>} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={<Link to='/travel'>travel</Link>} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={<Link to='/products'>product photography</Link>} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={<Link to='/about'>about</Link>} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={<Link to='/contact'>contact</Link>} />
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <div 
        className="menuButton" 
        onClick={toggleDrawer('right', true)}>
            <MenuIcon fontSize='large' htmlColor='white' />
    </div>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {sideList('right')}
      </SwipeableDrawer>
    </div>
  );
}

export default SwipeableTemporaryDrawer;