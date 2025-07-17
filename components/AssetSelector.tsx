import React from 'react';

type AssetSelectorProps = { label: string };

const AssetSelector: React.FC<AssetSelectorProps> = ({ label }) => (
  <div>
    <label>{label}</label>
    <select>
      <option>TON</option>
      <option>USDT</option>
      {/* Add more assets as needed */}
    </select>
  </div>
);

export default AssetSelector; 