import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './productlist.css'
import { addToCart, removeFromCart, getCookie, setCookie, CartContext } from "./context";



export default function ProductList({product})
{
    const [productCount, setProductCount] = useState(0);
    const [cartCount, setCartCount] = useContext(CartContext);

    useEffect(() => {
        // Retrieve the product count from cookies when the component mounts
        const storedProductCount = parseInt(getCookie(`product_${product.id}_count`));
        if (!isNaN(storedProductCount)) {
          setProductCount(storedProductCount);
        }
    }, [product.id]);

    const handleIncrement = () => {
        const newCount = productCount + 1;
        setProductCount(newCount);

        // Store the updated count in cookies
        setCookie(`product_${product.id}_count`, newCount, 30);
    };
    
    const handleDecrement = () => {
        const newCount = Math.max(0, productCount - 1);
        setProductCount(newCount);
        if(newCount === 0){
            removeFromCart(product.id)
            let newCount = cartCount - 1
            setCartCount(newCount)
        }
        
        // Store the updated count in cookies
        setCookie(`product_${product.id}_count`, newCount, 30);
    };

    
    return(
        <div className='product-container' key={product.id}>
            <Link to={`/productdetails/${product.id - 1}`} className='product-link'>
                <img src={product.picture1} alt={product.title} className='product-image'/>
                <h3 className='product-title'>{product.title}</h3>
                <p>{'$' + product.price}</p>
            </Link>

            <button 
            style={{display: productCount === 0 ? 'flex' : 'none'}} 
            className='cart-button' onClick={() => {addToCart(product.id); const newCount = cartCount + 1; setCartCount(newCount); handleIncrement(); }}>
                Add to Cart
            </button>

            <div className='product-count-container' style={{display: productCount === 0 ? 'none' : 'flex'}}>
                
                <button 
                className='decrement-button' 
                onClick={() => {handleDecrement()}}>-</button>

                <div className='product-count'>{productCount}</div>

                <button className='increment-button' onClick={() => {handleIncrement()}}>+</button>
            </div>
        </div>
    )
}