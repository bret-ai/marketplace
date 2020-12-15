import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import { db } from "./firebase";
import { thorify } from "thorify";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [amount, setAmount] = useState("");

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const [hash, setHash] = useState();
    const [txHash, settxHash] = useState();
    const [gasUsed, setgasUsed] = useState();        

    // useEffect(() => {
    //     // generate the special stripe secret which allows us to charge a customer
    //     const getClientSecret = async () => {
    //         const response = await axios({
    //             method: 'post',
    //             // Stripe expects the total in a currencies subunits
    //             url: `/payments/create?total=${getBasketTotal(basket) * 100}`
    //         });
    //         setClientSecret(response.data.clientSecret)
    //     }

    //     getClientSecret();
    // }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)
    console.log('Basket >>>>>>>>', basket);


    // const handleSubmit = async (event) => {
    //     // do all the fancy stripe stuff...
    //     event.preventDefault();
    //     setProcessing(true);

    //     const payload = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: elements.getElement(CardElement)
    //         }
    //     }).then(({ paymentIntent }) => {
    //         // paymentIntent = payment confirmation


    //         db
    //             .collection('users')
    //             .doc(user?.uid)
    //             .collection('orders')
    //             .doc(paymentIntent.id)
    //             .set({
    //                 basket: basket,
    //                 amount: paymentIntent.amount,
    //                 created: paymentIntent.created
    //             })

    //         setSucceeded(true);
    //         setError(null)
    //         setProcessing(false)

    //         dispatch({
    //             type: 'EMPTY_BASKET'
    //         })

    //         history.replace('/orders')
    //     })

    // }

    // 0x18b94b9a85e41919bbe7b1f44d44646ab9449abae27e84f5565184aef7e75656

    // useEffect((e) => {
    //     e.preventDefault();
    //     async function signTx() {
    //         const Web3 = require("web3");
    //         const web3 = thorify(new Web3(), "http://81.169.183.26");
            
    //         await web3.eth.accounts.wallet.add("0x18b94b9a85e41919bbe7b1f44d44646ab9449abae27e84f5565184aef7e75656");
    //         await web3.eth.sendTransaction({
    //             from: "0xA6BbC02898a9b1B95D449f3E92D615431fA9D0AA",
    //             to: "0x1016C9662480336460122638AC261d2329a11F4B",
    //             value: 1999999999999999998,
    //         }).then((ret) => {
    //             setHash(ret.blockHash);
    //             settxHash(ret.transactionHash);
    //             setgasUsed(ret.gasUsed);
    //             console.log(ret);
    //         });
    //     }
    //     signTx();
    // }, [])
    
    const signTx = async (event) => {
        event.preventDefault();

        const Web3 = require("web3");
        const web3 = thorify(new Web3(), "http://81.169.183.26");

        // let newAcc = web3.eth.accounts.privateKeyToAccount('0x18b94b9a85e41919bbe7b1f44d44646ab9449abae27e84f5565184aef7e75656');
        // console.dir(newAcc);
        // console.log("Account created >>>>>>>>>" + JSON.stringify(newAcc));

        await web3.eth.accounts.wallet.add("0x18b94b9a85e41919bbe7b1f44d44646ab9449abae27e84f5565184aef7e75656");
        await web3.eth.sendTransaction({
                from: "0xA6BbC02898a9b1B95D449f3E92D615431fA9D0AA",
                to: "0x1016C9662480336460122638AC261d2329a11F4B",
                value: 1999999999999999998,
            }).then((ret) => {
                setHash(ret.blockHash);
                settxHash(ret.transactionHash);
                setgasUsed(ret.gasUsed);
                console.log(ret);
            });

        // web3.eth.accounts.wallet.add("0x18b94b9a85e41919bbe7b1f44d44646ab9449abae27e84f5565184aef7e75656");
        // web3.eth.sendTransaction({
        //     from: "0xA6BbC02898a9b1B95D449f3E92D615431fA9D0AA",
        //     to: "0x1016C9662480336460122638AC261d2329a11F4B",
        //     value: 1999999999999999998,
        // }).then(ret => console.log(ret));
      };    

    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Proceed to pay (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Buyer Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>0xA6BbC02898a9b1B95D449f3E92D615431fA9D0AA</p>
                        {/* <p>Chiraq, Singapore.</p> */}
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>


                {/* Payment section - Payment method */}
                <div className="payment__section">
                    <div className='payment__title'>
                            <h3>Seller Address</h3>
                        </div>
                        <div className='payment__address'>
                            <p>0x1016C9662480336460122638AC261d2329a11F4B</p>
                            {/* <p>Chiraq, Singapore.</p> */}
                        </div>                    
                </div>
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Send signed transaction</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go */}
                        <form>
                            {/* <input
                                type="text"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            /> */}
                            <p>
                                <span>Block:{hash}</span>
                            </p> 
                            <p>   
                                <span>Tx Hash:{txHash}</span>
                            </p>
                            <p>    
                                <span>gas:{gasUsed}</span>
                            </p>
                            <button onClick={signTx}>Send</button>
                        </form>
                        

                        {/* <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* Errors */}
                            {/* {error && <div>{error}</div>} */}
                        {/* </form> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
