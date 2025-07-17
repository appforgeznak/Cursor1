import React from 'react';

type AmountFieldProps = { label: string };

const AmountField: React.FC<AmountFieldProps> = ({ label }) => (
  <div>
    <label>{label}</label>
    <input type="number" placeholder="0.0" />
  </div>
);

export default AmountField; 