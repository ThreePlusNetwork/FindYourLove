var SimpleStore = artifacts.require("./SimpleStore.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStore).then(() => {
    consloe.log("!23")
    console.log(SimpleStorage.address)
  });
};
