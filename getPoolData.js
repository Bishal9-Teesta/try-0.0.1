const axios = require("axios")

const URL = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3'

query = `
    {
        pools(orderBy: volumeUSD, orderDirection: desc, first: 10) {
            id
            volumeUSD
            liquidity
            totalValueLockedUSD
            token0 {
                symbol
            }
            token1 {
                symbol
            }
        }
    }
`

axios
    .post(URL, { query })
    .then(response => {
        console.log("Response: ", JSON.stringify(response.data.data, null, 2))
    })
    .catch(error => {
        console.log("Error: ", error)
    })
