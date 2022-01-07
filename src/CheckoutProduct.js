import React from 'react'
import { Star } from '@material-ui/icons'
import './CheckoutProduct.css'
import { useStatevalue } from './StateProvider'
function CheckoutProduct({id,title,image,price,rating}) {
    const [{},dispatch]=useStatevalue();
    const removeFromBasket=()=>{
        dispatch({
            type: "remove_from_basket",
            id:id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                <small>Rs</small>
                <strong>{price}</strong></p>
            
            <div className="checkoutProduct__rating" >
                {
                    Array(rating)
                    .fill()
                    .map((_)=>
                    (
                        <Star style={{fill:"yellow"}}></Star>
                    ))
                }
            </div>
            <button onClick={removeFromBasket} className="checkoutProduct__button">Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;

