import React from 'react'
import './Product.css'
import { Star } from '@material-ui/icons'
import { useStatevalue } from './StateProvider'
import { auth } from './Firebase';
function Product({id,title,image,price,rating}) {
    const [{user},dispatch]=useStatevalue();
    const  addToBasket=()=>{
       dispatch({
           type:'add_to_basket',
           item:{
           id:id,
           title:title,
           image:image,
           price: price,
           rating:rating
        }
       })
    }
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
            <small>Rs</small>
            <strong>{price}</strong>

            </p>
            <div className="product__rating" style={{display:'flex'}}>
                {
                    Array(rating)
                    .fill()
                    .map((_)=>
                    (
                        <Star style={{fill:"yellow"}}></Star>
                    ))
                }
            </div>
            </div>
            <img src={image} alt=""></img>
            <button onClick={user&&addToBasket} className="product__button">Add to basket</button>
            
        </div>
    )
}

export default Product
