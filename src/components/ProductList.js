import { useState } from "react";
import { Link } from "react-router-dom";
import './productlist.css'

export default function ProductList({picture, title, price, id})
{
    const [productCount, setProductCount] = useState(0)
    const [cartCount, setCartCount] = useState(0)

    return(
        <div className='product-container' key={id}>
            <Link to={`/productdetails/${id - 1}`} className='product-link'>
                <img src={picture} alt={title} className='product-image'/>
                <h3 className='product-title'>{title}</h3>
                <p>{'$' + price}</p>
            </Link>

            <button 
            style={{display: productCount === 0 ? 'flex' : 'none'}} 
            className='cart-button' onClick={() => {setCartCount(cartCount + 1); 
            setProductCount(1)}}>Add to Cart</button>

            <div className='product-count-container' style={{display: productCount === 0 ? 'none' : 'flex'}}>
                
                <button 
                className='decrement-button' 
                onClick={() => {setProductCount(productCount - 1); 
                if(productCount < 2) setCartCount(cartCount - 1)}}>-</button>

                <div className='product-count'>{productCount}</div>

                <button className='increment-button' onClick={() => setProductCount(productCount + 1)}>+</button>
            </div>
        </div>
    )
}