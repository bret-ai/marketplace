import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { thorify } from "thorify";

// Generate Order Data
function createData(id, date, name, shipTo, transaction, amount) {
  return { id, date, name, shipTo, transaction, amount };
}

const rows = [
  createData(0, 'just now', '0x756 •••• 2833', '0x296 •••• 1940', '0xda96290b0aee84d64f45a06e3e2ecf...', 312.44),
  createData(1, '1 minute ago', '0x274 •••• 8394', '0x464 •••• 1048', '0xcb64cdadf8334b45a99c9130aa05ae...', 866.99),
  createData(2, '6 minutes ago', '0x748 •••• 1938', '0x274 •••• 8394', '0x83e217df5fc63c0705ad9636557488...', 100.81),
  createData(3, '30 minute ago', '0x464 •••• 1048', '0x756 •••• 2833', '0x67c83942ce300153cfe5010c7d0080...', 654.39),
  createData(4, '2 months ago', '0x296 •••• 1940', '0x748 •••• 1938', '0x14e8f4296699060ce9461ad3193aaf...', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function RecentOrders() {
  const classes = useStyles();

  const Web3 = require("web3");
  const web3 = thorify(new Web3(), "http://81.169.183.26");

  

  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Age</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Tx Hash</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.transaction}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}