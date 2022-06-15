const {Blockchain, Transaction} = require('./blockchain');

const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('bfbe52088da24cc0f047e3e0cbb6c0bbcd1e16c635616681adbb6bed1d1cd231');
const myWalletAddress = myKey.getPublic('hex');

let cryptoCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
cryptoCoin.addTransaction(tx1);


console.log('\nStarting the miner...');
cryptoCoin.minePendingTransactions(myWalletAddress);
console.log('\nBalance of shanto is: ', cryptoCoin.getBalanceOfAddress(myWalletAddress));

console.log('\nStarting the miner again...');
cryptoCoin.minePendingTransactions(myWalletAddress);
console.log('\nBalance of shanto is: ', cryptoCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', cryptoCoin.isChainValid());