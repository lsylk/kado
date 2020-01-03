import React from 'react';
import { Container } from 'semantic-ui-react'
import NavBar from './components/menu';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App container">
      <Container>
        <NavBar></NavBar>
      </Container>
    </div>
  );
}

export default App;
