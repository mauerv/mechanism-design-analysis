var contract = artifacts.require("Registry");

var contractAddress = "0x5E2Eb68A31229B469e34999C467b017222677183"

module.exports = function() {
  async function getDataFromRegistry() {
    let instance = await contract.at(contractAddress)
    let res = await instance.appWasMade("0xab44931c91e38ea985beb3c877f712fe1faf196c7cdad22aa44e3a85a70cd7c2")
    console.log(res.toString());
  }
  getDataFromRegistry()
}
