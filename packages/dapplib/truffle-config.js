require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remind assault hunt local bone snap'; 
let testAccounts = [
"0xa1e48eebc009ae2c86d899d796e694b5ce4f46e8c8ab98ea9035896f0d99b631",
"0xdc6b2f2238541e2a19f128844360314f1db7f6cb454b8e17cad282ad44abe9a7",
"0x42992f5f7ef7298cf196c07b2ab78d82fcbe17c73484c2f3ac012ff5bc81955b",
"0xf9ab68d3bc13d27412ba01d904e9e68388275a86c823bbe9a2af300800cbdad0",
"0x22d00e4e7765a8ce143af6ccb589727e71ac90d83ed0f7db1b41ab35dc07fd9a",
"0x93d997c801b828e2c7905973a865d43a9767dddb405f3cf2eb048c0995c9d37a",
"0x560d761f9fada1ad1147346903e77da2d27ebfe31a9993faf5bf547ae8333f83",
"0xb10cb5bbb58f4bafae36ca8da1dd4d4e39cac83c5fcba94c7e34a75527c0eacb",
"0x9f9af6d946fefecb1787c37b9c621578b6ab34d3e3eb05b01ccafeab7682369b",
"0xc4bb427a2088ec4503aa36347c7d7beb92477a6837869381c7f68d1ea7fa2878"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
