const Web3 = require("web3")
const MetaMaskConnector = require('node-metamask');

const connector = new MetaMaskConnector({
    port: 3333, // this is the default port
    onConnect() { console.log('MetaMask client connected') }, // Function to run when MetaMask is connected (optional)
});

connector.start().then(() => {
    // Now go to http://localhost:3333 in your MetaMask enabled web browser.
    const web3 = new Web3(connector.getProvider());
    console.log("Web3: ", web3)
    // Use web3 as you would normally do. Sign transactions in the browser.
});
