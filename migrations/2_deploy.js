/* global contract, it, artifacts, assert, web3 */
var Razor = artifacts.require('./Razor.sol')
const BN = require('bn.js')

// todo remove deployer write access
module.exports = async function(deployer) {
    deployer.then(async () => {
        await deployer.deploy(Razor,new BN(1000000000).mul(new BN(10).pow(new BN('18'))))
    })
}