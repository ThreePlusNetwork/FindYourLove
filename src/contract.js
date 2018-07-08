import {
  Client, LocalAddress, CryptoUtils, LoomProvider
} from 'loom-js'

import Web3 from 'web3'
import SimpleStore from './contracts/SimpleStore.json'

export default class Contract {
  async loadContract() {
    this.onEvent = null
    this._createClient()
    this._createCurrentUserAddress()
    this._createWebInstance()
    await this._createContractInstance()
  }

  _createClient() {
    this.privateKey = CryptoUtils.generatePrivateKey()
    this.publicKey = CryptoUtils.publicKeyFromPrivateKey(this.privateKey)
    this.address = LocalAddress.fromPublicKey(this.publicKey).toString()
    this.client = new Client(
      'default',
      'ws://127.0.0.1:46657/websocket',
      'ws://127.0.0.1:9999/queryws',
    )

    this.client.on('error', msg => {
      console.error('Error on connect to client', msg)
      console.warn('Please verify if loom command is running')
    })

    console.log("init client success!!!")
  }

  _createCurrentUserAddress() {
    this.currentUserAddress = LocalAddress.fromPublicKey(this.publicKey).toString()
  }

  _createWebInstance() {
    this.web3 = new Web3(new LoomProvider(this.client, this.privateKey))
  }

  async _createContractInstance() {
    console.log(this.privateKey)
    console.log(this.address)
    const networkId = await this._getCurrentNetwork()
    console.log(networkId)
    this.currentNetwork = SimpleStore.networks[networkId]
    console.log(this.currentNetwork)
    const loomContractAddress = await client.getContractAddressAsync('SimpleStore')
    const contractAddress = CryptoUtils.bytesToHexAddr(loomContractAddress.local.bytes)
    const ABI = SimpleStore.abi

    console.log(ABI)
    if (!this.currentNetwork) {
      throw Error('Contract not deployed on DAppChain')
    }

   
    this.simpleStoreInstance = new this.web3.eth.Contract(ABI, this.currentNetwork.address, {
      from: this.currentUserAddress
    })

    this.simpleStoreInstance.events.NewValueSet({}, (err, event) => {
      if (err) console.error('Error on event', err)
      else {
        if (this.onEvent) {
          this.onEvent(event.returnValues)
        }
      }
    })
  }

  addEventListener(fn) {
    this.onEvent = fn
  }

  async _getCurrentNetwork() {
    return await this.web3.eth.net.getId()
  }

  async setValue(value) {
    return await this.simpleStoreInstance.methods.set(value).send({
      from: this.currentUserAddress
    })
  }

  async getValue() {
    return await this.simpleStoreInstance.methods.get().call({
      from: this.currentUserAddress
    })
  }
}
