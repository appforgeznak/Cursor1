#Project overview
We are building a frontend for web3 escrow service. It will allow users to exchange any assets on TON blockchain in a trustless way.
This service will be built using TON SDK and TON Connect.

We will use the following technologies:
- React
- TypeScript
- TON SDK
- TON Connect

We will use the following libraries:
- react-router-dom

npm install react react-dom
npm install --save-dev @types/react @types/react-dom

#Core functionality
1. Create new exchange offer
1.1 "Give" card
1.1.1 Asset selector
1.1.2 "send" amount field
1.1.3 "partner will get" amount field
1.1.4 Clickable current selected asset available amount
1.1.5 Fees block
1.1.5.1 Blockchain fees
1.1.5.2 Service comission
1.1.5.3 Total fee
1.1.6 Partner's wallet address
1.2 "Get" card
1.2.1 Asset selector
1.2.2 "send" amount field
1.2.3 "I will get" amount field
1.2.5 Fees block
1.2.5.1 Blockchain fees
1.2.5.2 Service comission
1.2.5.3 Total fee
1.3 "Create exchange offer" button
2. See active exchange offers
2.1 List of active (not fullfilled yet and not canceled yet offers)
2.1.1 Elements of the list contain "exchange offer ID", "counterparty's wallet address", "exchange offer params (asset sent, amount sent, asset awaiting, amount awaiting)", "cancel" button
3. See exchange offers archive (completed and canceled)
3.1 List of active (not fullfilled yet and not canceled yet offers)
3.1.1 Elements of the list contain "exchange offer ID", "counterparty's wallet address", "exchange offer params (asset sent, amount sent, asset awaiting, amount awaiting)", "exchange offer status (fulfilled, canceled)"



