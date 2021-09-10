const EventTest = artifacts.require('./EventTest.sol')

module.exports = async function(deployer) {
  const test = await EventTest.deployed()

  console.log('Account address:', test.address)

  let accounts = await web3.eth.getAccounts()
  await test.addNumbers(1, 2, {
    from: accounts[0],
  })
  await test.addNumbers(10, 24, {
    from: accounts[1],
  })
  await test.addNumbers(13, 2, {
    from: accounts[1],
  })
}