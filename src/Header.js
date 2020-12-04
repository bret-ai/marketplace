import React, { useState } from "react";
import "./Header.css";
// import SearchIcon from "@material-ui/icons/Search";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { thorify } from "thorify";


function Header() {
  const [{ basket, user, userWallet }, dispatch] = useStateValue();

  const [bal, setBal] = useState('');
  const [vthoBal, setVthoBal] = useState('');

  const Web3 = require("web3");
  const web3 = thorify(new Web3(), "http://81.169.183.26");
  // let address = userWallet;  

  web3.eth.getBlock("latest").then(res => console.log(res));

  // VET Bal
  web3.eth.getBalance('0x1016C9662480336460122638AC261d2329a11F4B').then(res => {
    setBal(res / 1000000000000000000);
    console.log("VET >>" + res);
  })

  // Vtho Balance
  web3.eth.getEnergy('0x1016C9662480336460122638AC261d2329a11F4B').then(res => {
    setVthoBal(parseFloat(res / 1000000000000000000));
    console.log("Vtho Balance >> " + res)
  })

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="header__logo">
          <h3>Marketplace</h3>
        </div>
        {/* <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        /> */}
      </Link>

      {/* <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div> */}

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">New</span>
            <span className="header__optionLineTwo">Sale</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Market</span>
          <span className="header__optionLineTwo">MarketPlace</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <LocalMallIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        <Link to="/account">
          <div className="header__optionBasket">
              <AccountBalanceWalletIcon />
              <span className="header__optionLineTwo header__basketCount">
                {bal}
              </span>
          </div>
        </Link>        
      </div>
    </div>
  );
}

export default Header;
