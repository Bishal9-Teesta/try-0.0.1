const Web3 = require("web3")
const getCircularReplacer = require("./getCircularReplacer")

const main = async () => {

    const web3 = new Web3()
    web3.setProvider('http://localhost:3333')

    console.log("Web3 :", JSON.stringify(web3, getCircularReplacer(), 2))

    const balance = await web3.eth.getBalance("0x779D06dF5A72f67cB7B5b46524bb2d53b71A824b")
    console.log("Balance: ", balance)
}
main()