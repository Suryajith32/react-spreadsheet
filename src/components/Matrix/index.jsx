import React from 'react';
import './index.css'
import TableHeader from '../TableHeader';
import TableSheet from '../TableSheet';

const MatrixTable = ({ }) => {
  console.log("matrix renderd")
  return (
    <>
      <div>
        <button >show updated Data</button>
      </div>
      <div className="matrix-table" >
        <table>
          <TableHeader />
          <TableSheet />
        </table>
      </div>
    </>
  );
};

export default MatrixTable;
