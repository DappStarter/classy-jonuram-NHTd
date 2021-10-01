require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name release sad solid include arena equal gasp'; 
let testAccounts = [
"0xa1ae4001600bac14b6e2c7607b80939a1b43e731435a55d574609a353a79ea21",
"0x5fb1f8f9968d9794906465a4f753badd7e60ebb42ec76bd7ca4cc57cd889caeb",
"0xca21d1e1a20ce51f05d6e6f2fa7833ef3cc891747964b3424a5deacb44f26e1d",
"0x44cd43e219c42d4a219b9e75fb83f4653f4303010bb405265d377fa483e893ab",
"0x8604aa2c1546f0f87bc9d1407f3021b8ca2d731798fce0f4fc69a9e46a70a017",
"0xe74e7e4900bfc875edf9840cf0ba7ca62e18c5502d58dcc71fc5567c3cd65107",
"0xe3a971ae9350fbf1d6b15550fbd1b1782e62508b371b642b54f9809cac290a6a",
"0x4c3dc57af219c5c264da20e8a6b168d0f044b29c56ad4192b19f72d6353e81c2",
"0x72903a97842e88a809849f946791b49318ff4667165699b79b4d0ef1756189bd",
"0x685c0aa67f8b1ffdc760a56d5672a42656eeca1f34f0d15e97e1d89c47562a81"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

