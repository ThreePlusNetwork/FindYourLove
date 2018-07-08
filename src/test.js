//  const {
//     Client, LocalAddress, CryptoUtils, LoomProvider
//   } = require('loom-js') 
  
// const Web3 = require('web3')



// (async function () {
//   privateKey = CryptoUtils.generatePrivateKey()
//   console.log("ok")
//   console.log(privateKey)
//   publicKey = CryptoUtils.publicKeyFromPrivateKey(privateKey)
//   console.log(publicKey)


//   client = new Client(
//     'default',
//     'ws://127.0.0.1:46657/websocket',
//     'ws://127.0.0.1:9999/queryws',
//   )

//   client.on('error', msg => {
//     console.error('Error on connect to client', msg)
//     console.warn('Please verify if loom command is running')
//   })

//   console.log(client)
//   console.log("asd")


  
//   currentUserAddress = LocalAddress.fromPublicKey(publicKey).toString()
//   console.log("Address")
//   console.log(currentUserAddress)

//   const web3 = new Web3(new LoomProvider(client, privateKey))

//   console.log(web3)
  

//   const abi = [
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "name": "_sender",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "name": "_name",
//           "type": "string"
//         },
//         {
//           "indexed": false,
//           "name": "_age",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "name": "_hobby",
//           "type": "string"
//         },
//         {
//           "indexed": false,
//           "name": "_sex",
//           "type": "bool"
//         }
//       ],
//       "name": "NewAccount",
//       "type": "event"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_name",
//           "type": "string"
//         },
//         {
//           "name": "_age",
//           "type": "uint256"
//         },
//         {
//           "name": "_hobby",
//           "type": "string"
//         },
//         {
//           "name": "_sex",
//           "type": "bool"
//         }
//       ],
//       "name": "createAccount",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "constant": true,
//       "inputs": [],
//       "name": "get",
//       "outputs": [
//         {
//           "name": "",
//           "type": "address"
//         },
//         {
//           "name": "",
//           "type": "string"
//         },
//         {
//           "name": "",
//           "type": "uint256"
//         },
//         {
//           "name": "",
//           "type": "string"
//         },
//         {
//           "name": "",
//           "type": "bool"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function"
//     }
//   ]

//   console.log(abi)

//   const loomContractAddress = await client.getContractAddressAsync('Account')
// })()
