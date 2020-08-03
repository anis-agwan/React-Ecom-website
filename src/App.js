import React from 'react';
import './App.css';
import HomePage from './homepage.component';
import './homepage.styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <HomePage />
      </div>
    );
  }
}

export default App;
