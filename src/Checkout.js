import React from 'react'
import { useStatevalue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import CurrencyFormat from 'react-currency-format'
function Checkout() {
    const [{basket}]=useStatevalue()
    return (
        
        <div className="checkout">
            <div className="checkout__left">
        <img className="checkout__ad" src="https://www.adweek.com/wp-content/uploads/2018/09/amazon-advertising-content-2018.png"  alt=""></img>
        {
            basket?.length===0 ? (
                <div>
                <h2> Your basket is empty </h2>
                <p>add items to your cart to see them here</p>
                </div>
            ):(
                <div>
                    <h1>Your shopping basket</h1>
                    {basket.map(item=>(
                    <CheckoutProduct
                      id={item.id}
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      rating={item.rating}
                      />
                    ))}
                </div>
            )}
        </div>
        {
            basket.length>0 && (
                <div className="checkout__right">
                    <Subtotal/>
                    
                </div>
            )
        }
    </div>
    )
}

export default Checkout
