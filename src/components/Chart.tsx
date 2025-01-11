import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: Array<{ weekEnding: string; retailSales: number; }>;
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="weekEnding" />
        <YAxis hide />
        <Tooltip />
        <Line type="monotone" dataKey="retailSales" stroke="#2F80ED" strokeWidth={3} />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#999999" strokeWidth={3}
        />
      </LineChart>
      </ResponsiveContainer>
  );
};

export default Chart;
