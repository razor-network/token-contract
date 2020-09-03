/* global contract, it, artifacts, assert, web3 */
var SchellingCoin = artifacts.require('./SchellingCoin.sol')
const BN = require('bn.js')

// todo remove deployer write access
module.exports = async function(deployer) {
    deployer.then(async () => {
        await deployer.deploy(SchellingCoin,new BN(1000000000).mul(new BN(10).pow(new BN('18'))))
    })
}