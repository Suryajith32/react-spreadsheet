// src/MatrixTable.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

const MatrixTable = ({ matrix }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="matrix-table" ref={ref}>
      <table>
        <thead>
          <tr>
            {matrix[0]?.map((_, colIndex) => (
              <th key={colIndex}>Column {colIndex + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                >
                  {inView ? cell : ' '}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatrixTable;
