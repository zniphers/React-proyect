import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './header/header';
import Main from './main/main';


export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" disableGutters='true'>
        <Typography component="div" style={{ color: 'white', backgroundColor: '#000020', height: '100vh' }} >
            <Header />
            <Main />
        </Typography>
      </Container>
    </React.Fragment>
  );
}