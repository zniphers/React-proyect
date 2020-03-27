import React from 'react';
import './App.css';
import Container from './components/container/container';

class App extends React.Component {
  constructor(){
    super();
    this.state= {

    }
  }

  render(){
    return(
      <section className="seccion">
        <Container />
      </section>
    )
  }
}

export default App;
