import React, { useEffect } from 'react';
import './App.css';
import MatrixTable from './components/Matrix';
import { useDispatch} from 'react-redux';
import { addMatrix } from './store/reducer/dataReducer';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const matrix = [];
    const numRows = 1000;
    const numCols = 40;
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numCols; j++) {
        row.push(Math.floor(Math.random() * 80));
      }
      matrix.push(row);
    }
    dispatch(addMatrix(matrix))
    console.log('useEffect rendered')
  }, [])

  console.log("App renderd")
  return (
    <div className="App">
      <MatrixTable />
    </div>
  );
}

export default App;
