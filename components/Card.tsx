import React from 'react';

type CardProps = { title: string; children: React.ReactNode };

const Card: React.FC<CardProps> = ({ title, children }) => (
  <div style={{ border: '1px solid #ccc', padding: 16, marginBottom: 16 }}>
    <h3>{title}</h3>
    {children}
  </div>
);

export default Card; 