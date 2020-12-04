import React, { useState } from 'react';
import './Wallet.css';
import { useStateValue } from "./StateProvider";

function Wallet() {

    const [walletAddress, setWalletAddress] = useState("");
    

    const [{ }, dispatch] = useStateValue();


    const walletId = (e) => {
        e.preventDefault();
        dispatch({
        type: "SET_WALLETID",
        userWallet: walletAddress,
        });
    }

    return (
        <div className="wallet">
            <div className="wallet__container">
                {/* <h1>Please enter your Wallet Address</h1> */}
                <form>
                    <h5>Please Enter Wallet Address</h5>
                        <input
                            type="text"
                            value={walletAddress}
                            onChange={(e) => setWalletAddress(e.target.value)}
                        />

                        <button onClick={walletId} className="wallet__button">
                        Create your Madini Account
                        </button>                    
                </form>
            </div>                
        </div>
    )
}

export default Wallet;
