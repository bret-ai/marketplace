import React, { useState } from 'react';
import { useStateValue } from "../StateProvider";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { thorify } from "thorify";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },  
}));


export default function PaymentForm() {
  const [{ user }, dispatch] = useStateValue(); 

  const products = [
    { name: 'Buyer Address', price: user?.displayName },
    { name: 'Seller Address', price: '0x1016C9662480336460122638AC261d2329a11F4B' }
  ];

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  
  const signTx = async (event) => {
    event.preventDefault();
    handleClick();
  
    const Web3 = require("web3");
    const web3 = thorify(new Web3(), "https://explore-testnet.veblocks.net");
    await web3.eth.accounts.wallet.add("0x349bd6e84b57183c9056817dde0db72bcb0e709c989109aeaa4e9ee0b3b9ad4f");
    await web3.eth.sendTransaction({
            from: "0x5F5998Ac3031032Fab563c90c78BFc575D03D604",
            to: "0x90D83737d9aC9f12489Ad306761492397DF35927",
            value: 1999999999999999998,
        }).then((ret) => {
            dispatch({
              type: "SET TX",
              txData: {
                blockHash: ret.blockHash,
                txHash: ret.transactionHash,
                gasUsed: ret.gasUsed,
              }
            });
            // setHash(ret.blockHash);
            // settxHash(ret.transactionHash);
            // setgasUsed(ret.gasUsed);
            console.log(ret);
        }).catch((error) => {
            alert(error);
        });
        handleClick();
  };      


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Pay
      </Typography>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Account Address" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth autoComplete="cc-exp" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
          />
        </Grid> */}
        
        <Grid item xs={12}>
          <List disablePadding>
            {products.map((product) => (
              <ListItem className={classes.listItem} key={product.name}>
                <ListItemText primary={product.name} secondary={product.desc} />
                <Typography variant="body2">{product.price}</Typography>
              </ListItem>
            ))}
            <ListItem className={classes.listItem}>
              <ListItemText primary="Amount" />
              <Typography variant="subtitle1" className={classes.total}>
                𐆗1.99
              </Typography>
            </ListItem>            
          </List>
        </Grid>
        <div className={classes.root}>
          <Button variant="outlined" onClick={signTx}>
            Send
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Transaction is Successful!
            </Alert>
          </Snackbar>         
        </div>        
      </Grid>
    </React.Fragment>
  );
}