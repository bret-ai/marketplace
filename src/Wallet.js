// import React, { Component } from 'react';
// import { thorify } from "thorify";
// import './App.css';
// import logo from './logo.svg';


// class App extends Component {
//   componentWillMount() {
//     this.loadBlockchainData()
//   }

//   async loadBlockchainData() {
//     const Web3 = require("web3");    
//     const web3 = await thorify(new Web3(), "https://explore-testnet.veblocks.net");
//     web3.eth.getBalance("0x90D83737d9aC9f12489Ad306761492397DF35927").then(res => {
//       console.log(res);
//       this.setState({ accountBal: (res/1000000000000000000).toFixed(2) })
//     })
//     web3.eth.getEnergy("0x90D83737d9aC9f12489Ad306761492397DF35927").then(result => {
//       console.log(result)
//       this.setState({ accountGas: (result/1000000000000000000).toFixed(2) })
//     })

//     this.setState({ loading: false })
//   }

//   constructor(props) {
//     super(props)
//     this.state = {
//       accountBal: '',
//       accountGas: '',
//       loading: true
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Marketplace Prototype.
//           </p>
//           <div className="account__info">
//             <h5>Your accounct info</h5>
//             <p>VET: {this.state.accountBal}</p>
//             <p>Vtho: {this.state.accountGas}</p>
//           </div>        
//         </header>
//     </div>
//     );
//   }
// }

// export default App;