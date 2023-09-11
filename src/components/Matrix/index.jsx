// src/MatrixTable.js
import React from 'react';
import { useInView } from 'react-intersection-observer';
import './index.css'
import TableHeader from '../TableHeader';
import TableSheet from '../TableSheet';
import { useSelector } from 'react-redux';

const MatrixTable = ({ matrix }) => {
  const updatedMarix = useSelector((state) => state.data.value.initialMatrix)

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const handleButtonClick = () => {
      console.log(updatedMarix,'updated matrix')
  }

  return (
    <>
    <div>
      <button onClick={handleButtonClick}>show updated Data</button>
    </div>
      <div className="matrix-table" ref={ref}>
        <table>
          <TableHeader matrix={matrix}/>
          <TableSheet matrix={matrix} inView={inView}/>
        </table>
      </div>
    </>
  );
};

export default MatrixTable;
