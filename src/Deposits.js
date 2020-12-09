import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import { thorify } from "thorify";
import { BottomNavigation } from '@material-ui/core';
import { useStateValue } from './StateProvider';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  viewBalance: {
    flex: 1,
  },
});

export default function Deposits() {
  const [{ userWallet }, dispatch] = useStateValue();

  const [bal, setBal] = useState('');
  const [vthoBal, setVthoBal] = useState('');

  const Web3 = require("web3");
  const web3 = thorify(new Web3(), "http://81.169.183.26");
  // let address = userWallet;
  let address = "0x1016C9662480336460122638AC261d2329a11F4B";


  web3.eth.getBlock("latest").then(res => console.log(res));

  // VET Bal
  web3.eth.getBalance(address).then(res => {
    setBal(parseFloat(res / 1000000000000000000).toFixed(4));
    console.log("VET >>" + res);
  })

  // Vtho Balance
  web3.eth.getEnergy(address).then(res => {
    setVthoBal(parseFloat(res / 1000000000000000000).toFixed(4));
    console.log("Vtho Balance >> " + res)
  })

  // Get past logs
  // web3.eth.getPastLogs(0xe793502E70BC729E16dE8284E1fCA85B08ccF3FE).then(result => {
  //   console.log(result)
  // })


  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Wallet Balance</Title>
      {/* <Typography color="textSecondary" className={classes.depositContext}>
        {address}
      </Typography>       */}
      <Typography component="p" variant="h6">
        {!bal ? "------" : bal}<small>VET</small>
      </Typography>
      <Typography component="p" variant="h6">
        {!vthoBal ? "------" : vthoBal}<small>Vtho</small>
      </Typography>      
      <div className="{classes.viewBalance}">
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}