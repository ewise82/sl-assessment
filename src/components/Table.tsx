import React from 'react';
import './Table.css';

interface TableProps {
  data: Array<{
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="sales-table">
      <thead>
        <tr>
          <th>WEEK ENDING</th>
          <th>RETAIL SALES</th>
          <th>WHOLESALE SALES</th>
          <th>UNITS SOLD</th>
          <th>RETAILER MARGIN</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.weekEnding}>
            <td>{row.weekEnding}</td>
            <td>{row.retailSales}</td>
            <td>{row.wholesaleSales}</td>
            <td>{row.unitsSold}</td>
            <td>{row.retailerMargin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
