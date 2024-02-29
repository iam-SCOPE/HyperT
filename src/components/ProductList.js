import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './productlist.css'
import { CartContext, CartItemsContext } from "./context";



export default function ProductList({product})
{
    const [productCount, setProductCount] = useState(0)
    const [cartCount, setCartCount] = useContext(CartContext)
    const {addToCart, removeFromCart} = useContext(CartItemsContext)



    return(
        <div className='product-container' key={product.id}>
            <Link to={`/productdetails/${product.id - 1}`} className='product-link'>
                <img src={product.picture1} alt={product.title} className='product-image'/>
                <h3 className='product-title'>{product.title}</h3>
                <p>{'$' + product.price}</p>
            </Link>

            <button 
            style={{display: productCount === 0 ? 'flex' : 'none'}} 
            className='cart-button' onClick={() => {setCartCount(cartCount + 1); 
            setProductCount(productCount + 1); addToCart(product)}}>Add to Cart</button>

            <div className='product-count-container' style={{display: productCount === 0 ? 'none' : 'flex'}}>
                
                <button 
                className='decrement-button' 
                onClick={() => {setProductCount(productCount - 1); 
                if(productCount < 2) {setCartCount(cartCount - 1); removeFromCart(product)}}}>-</button>

                <div className='product-count'>{productCount}</div>

                <button className='increment-button' onClick={() => setProductCount(productCount + 1)}>+</button>
            </div>
        </div>
    )
}