import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStatevalue, useStateValue} from "./StateProvider"
import { getBasketTotal } from './Reducer';
function Subtotal() {
    const [{basket},dispatch]=useStatevalue();
    return (
        <div className="subtotal">
           {/*price*/}
           <CurrencyFormat
           renderText={(value)=>(
               <>
               <p>SubTotal({basket.length} items):<strong>{value}</strong></p>
               <small className="subtotal__gift">
                   <input type="checkbox"/> This order contains a gift
               </small>
               </>
           )}
           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"$"}
           />
           <button>Proceed to Checkout</button> 
        </div>
    )
}

export default Subtotal
