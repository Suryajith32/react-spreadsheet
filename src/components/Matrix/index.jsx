import React from 'react';
import './index.css'
import TableHeader from '../TableHeader';
import TableSheet from '../TableSheet';

const MatrixTable = () => {
  console.log("matrix renderd")
  return (
    <>
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
