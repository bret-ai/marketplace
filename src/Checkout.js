import React, {useState} from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Wallet from "./Wallet";
import { thorify } from "thorify";

function Checkout() {
  const [{ basket, user, userWallet }, dispatch] = useStateValue();

  const [bal, setBal] = useState('');
  const [vthoBal, setVthoBal] = useState('');

  const Web3 = require("web3");
  const web3 = thorify(new Web3(), "http://81.169.183.26");
  // let address = userWallet;  

  web3.eth.getBlock("latest").then(res => console.log(res));

  // VET Bal
  web3.eth.getBalance('0xA6BbC02898a9b1B95D449f3E92D615431fA9D0AA').then(res => {
    setBal(res);
  })

  // Vtho Balance
  web3.eth.getEnergy('0xA6BbC02898a9b1B95D449f3E92D615431fA9D0AA').then(res => {
    setVthoBal(parseFloat(res));
  })  

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://i.ytimg.com/vi/rrV1hZTsUgg/maxresdefault.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          {/* <h3>WalletId: {userWallet}</h3> */}
          <h3>WalletId: 0xA6BbC02898a9b1B95D449f3E92D615431fA9D0AA</h3>
          <p>Bal: {bal}</p>
          <p>Gas: {vthoBal}</p>
          <h2 className="checkout__title">Madini MarketPlace Powered by Vechain</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/* <CheckoutProduct /> */}
          {/* <CheckoutProduct /> */}
          {/* <CheckoutProduct /> */}
          {/* <CheckoutProduct /> */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <Wallet />        
      </div>
    </div>
  );
}

export default Checkout;
