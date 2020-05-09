import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Typography, Box, Container } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Home from './component/Home';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (

    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>

  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));


let Home1 = () => {
  return <div>Home</div>
}
let About = () => {
  return <div>About</div>
}
let Shop = () => {
  return <div>Shop</div>
}

function App(props) {

  const classes = useStyles();
  const [value, setValue] = useState(0);


  const handleChange = (event, newValue) => {
    console.log('value ', newValue);
    setValue(newValue);
  };

  return (
    <Container maxWidth="xl">
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
              indicatorColor="primary"
              textColor="primary"
              aria-label="scrollable force tabs example"
            >
              <Tab label="Home" icon={<PhoneIcon />} component={Link} to='/' />
              <Tab label="About" icon={<FavoriteIcon />} component={Link} to='/about' />
              <Tab label="Finance" icon={<PersonPinIcon />} component={Link} to='/finance' />
              <Tab label="Shop" icon={<HelpIcon />} component={Link} to='/shop' />
              <Tab label="Contact" icon={<ShoppingBasket />} component={Link} to='/contact' />
              <Tab label="User Schema" icon={<ThumbDown />} component={Link} to='/schema' />
              <Tab label="Triggers" icon={<ThumbUp />} component={Link} to='/triggers' />

            </Tabs>
          </AppBar>

          {/* <TabPanel value={value} index={0}>Item One</TabPanel>
          <TabPanel value={value} index={1}>Item Two</TabPanel>
          <TabPanel value={value} index={2}>Item Three</TabPanel>
          <TabPanel value={value} index={3}>Item Four</TabPanel>
          <TabPanel value={value} index={4}>Item Five</TabPanel>
          <TabPanel value={value} index={5}>Item Six</TabPanel>
          <TabPanel value={value} index={6}>Item Seven</TabPanel> */}

          {/* <TabPanel value={value} index={0}> */}
          <Switch>
            <Route path="/" component={Home1} exact />
            <Route path="/about"
              render={() => <About />}
            />
            <Route path="/shop"
              render={() => <Shop />}
            />
          </Switch>
          {/* </TabPanel> */}

        </div>

        {/* <Home /> */}

      </BrowserRouter>
    </Container>
  );
}

export default App;
