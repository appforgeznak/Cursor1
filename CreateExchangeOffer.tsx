import React from 'react';
import AssetSelector from './components/AssetSelector';
import AmountField from './components/AmountField';
import FeesBlock from './components/FeesBlock';
import PartnerWalletInput from './components/PartnerWalletInput';
import Card from './components/Card';

const CreateExchangeOffer: React.FC = () => {
  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h2>Create New Exchange Offer</h2>
      <Card title="Give">
        <AssetSelector label="Asset" />
        <AmountField label="Send amount" />
        <AmountField label="Partner will get (amount)" />
        <div>
          <span>Available: --</span> {/* Clickable in future */}
        </div>
        <FeesBlock />
        <PartnerWalletInput />
      </Card>
      <Card title="Get">
        <AssetSelector label="Asset" />
        <AmountField label="Send amount" />
        <AmountField label="I will get (amount)" />
        <FeesBlock />
      </Card>
      <button style={{ width: '100%', padding: 12, fontSize: 16 }}>Create exchange offer</button>
    </div>
  );
};

export default CreateExchangeOffer; 