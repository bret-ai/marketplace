import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkouts from "./Checkouts";
import SignInSide from "./SignInSide";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import Orders from "./Orders";
import Dashboard from "./Dashboard";
import SignUp from "./SignUp";
import Marketplace from "./Marketplace";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./Form/Checkout";

// const promise = loadStripe(
//   "pk_test_51HQXcNBgXXR504kqVkiIAuJBQhqQvCgqXxQuTOmCeXBA6HTdIdPJgWSeRHeYkZ1FH35NvvraVQGLA6g4YsyigYOt00vUI1F1yh"
// );

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <SignInSide />
          </Route>          
          <Route path="/checkout">
            <Header />
            <Checkouts />
          </Route>
          <Route path="/account">
            <Dashboard />
          </Route>
          <Route path="/market">
            <Header />
            <Home />
          </Route>          
          <Route path="/marketplace">
            <Marketplace />
          </Route>          
          <Route path="/buy">
            <Checkout />
          </Route>
          {/* <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> */}
          <Route path="/">
            <SignUp />
          </Route>          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
