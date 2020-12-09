import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import { auth } from "./firebase";

function Orders() {
  // const [{ basket, user }, dispatch] = useStateValue();
  // const [orders, setOrders] = useState([]);
  const [walletId, setWalletId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // var user = firebase.auth().currentUser;

  const updateUser = (e) => {
    e.preventDefault();

    auth
      .currentUser
      .updateProfile({
        displayName: "0x1016C9662480336460122638AC261d2329a11F4B",
        photoURL: "https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308460-stock-illustration-unknown-person-silhouette-profile-picture.jpg",
        phoneNumber: 0x1016C9662480336460122638AC261d2329a11F4B,
        tenantId: "0x1016C9662480336460122638AC261d2329a11F4B"
      }).then((auth) => {
        console.log();
      }).catch(function(error) {
        console.log(error)
      });

    // var user = firebase.auth().currentUser;

    // user.updateProfile({
    //   displayName: "Jane Q. User",
    //   photoURL: "https://example.com/jane-q-user/profile.jpg"
    // }).then(function() {
    //   // Update successful.
    // }).catch(function(error) {
    //   // An error happened.
    // });


    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     history.push("/account");
    //   })
    //   .catch((error) => alert(error.message));
  };

  // useEffect(() => {
  //   if (user) {
  //     db.collection("users")
  //       .doc(user?.uid)
  //       .collection("orders")
  //       .orderBy("created", "desc")
  //       .onSnapshot((snapshot) =>
  //         setOrders(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data(),
  //           }))
  //         )
  //       );
  //   } else {
  //     setOrders([]);
  //   }
  // }, [user]);

  return (
    <div className="orders">
      {/* <h1>Your orders</h1> */}
      <h1>Update user</h1>
      {/* <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div> */}
      <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          {/* <h5>Wallet Address</h5>
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          /> */}

          <h5>Password</h5>
          <input
            type="text"
            value={walletId}
            onChange={(e) => setWalletId(e.target.value)}
          />

          <button
            type="submit"
            onClick={updateUser}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
    </div>
  );
}

export default Orders;
