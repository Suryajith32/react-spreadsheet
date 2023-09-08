// src/App.js
import React from 'react';
import './App.css';
import MatrixTable from './components/Matrix';


function App() {
  const matrix = [];
  const numRows = 1000;
  const numCols = 10;

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      row.push(Math.floor(Math.random() * 80)); // Replace this with your data
    }
    matrix.push(row);
  }

  return (
    <div className="App">
      <h1>Lazy Loading Matrix Table</h1>
      <MatrixTable matrix={matrix} />
    </div>
  );
}

export default App;
