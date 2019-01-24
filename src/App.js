import React, { Component } from 'react';
import { Dashboard } from './components/dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          header
        </header>
        <main>
          <Dashboard/>
        </main>
        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default App;
