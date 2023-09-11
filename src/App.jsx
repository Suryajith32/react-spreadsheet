// src/App.js
import React, { Suspense, useEffect } from 'react';
import './App.css';
import MatrixTable from './components/Matrix';
import { useDispatch } from 'react-redux';
import { addMatrix } from './store/reducer/dataReducer';


function App() {
  const matrix = [];
  const numRows = 1000;
  const numCols = 60;
  const dispatch = useDispatch()

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      row.push(Math.floor(Math.random() * 80));
    }
    matrix.push(row);
  }

  useEffect(() => {
    dispatch(addMatrix(matrix))
  }, [])


  return (
    <div className="App">
      <Suspense fallback='loading...'>
        <MatrixTable matrix={matrix} />
      </Suspense>
    </div>
  );
}

export default App;
