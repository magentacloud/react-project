import React from 'react';
import Board from './Board';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid p-0">
        <header className="app-header py-2">
          <div className="row">
          <div className="col p-0 d-flex justify-content-end">
          <span className="login mr-5">
            </span>
          </div>
          
          </div>
        
      </header>
      
      <Board></Board>
      </div>
      
    </div>
  );
}

export default App;
