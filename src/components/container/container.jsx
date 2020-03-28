import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './header/header';
import Main from './main/main';

// Dependencias de React-Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// Importacion de paginas
import Home from '../.././Pages/home/home-page';
import About from '../.././Pages/about/about-page';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters='true'>
        <Typography component="div" style={{ color: 'white', backgroundColor: '#000020', height: '100vh' }} >
            <Header />
            <Main />
            <Router>
              <div>
                <nav>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </div>
            </Router>
        </Typography>
      </Container>
    </React.Fragment>
  );
}