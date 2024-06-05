import './cartcheckout.css'
import Ads from './Ads'
import { useState, useEffect } from 'react';
import { getCookie } from './context';
import products from '../products';
import ScrollToTop from './ScrollToTop';


export default function CartCheckout()
{
    const [balancePrice, setBalncePrice] = useState(0)
    const [deliveryPrice, setDeliveryPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    let cartItems = JSON.parse(getCookie("cartItems")) || [];

    const productContent = cartItems.map((item) => products.find((product) =>  product.id === item));

    // const productCount = getCookie(`product_${product.id}_count`);

    const checkout = productContent.map((product) => {
        const productCount = getCookie(`product_${product.id}_count`);

        return(
            <div className='cart-products' key={product.id}>
                <div className='cart-imagextitle'>
                    <img src={product.picture1} alt='cart product' className='cart-product-image'/>
                    <p className='cart-product-title'>{product.title}</p>
                </div>
                <div className='cart-product-price'>{'$' + product.price} * {productCount}</div>
            </div>
        )
    })
    
    useEffect(() => {
        const totals = productContent.map((product) => {
            const productCount = getCookie(`product_${product.id}_count`);
            return product.price * productCount
        })
        if(totals.length !== 0){
            const balance = totals.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue));
            const delivery = Math.floor(balance / 10)
            const total = Number(balance) + Number(delivery)

            setBalncePrice(balance.toFixed(2))
            setDeliveryPrice(delivery)
            setTotalPrice(total.toFixed(2))
        }
    },[productContent])


    return(
        <div className="cart-checkout">
            <div className='cart-header'>Cart Items</div>
            <ScrollToTop/>
            <div className='cart-products-container'>
                {checkout}
            </div>

            <div className='checkout-btn-container'>
                <div className='subtotal'>
                    <h3>Subtotal</h3>
                    <h3>{'$' + balancePrice}</h3>
                </div>

                <div className='delivery'>
                    <h3>Delivery Fee</h3>
                    <h3>{'$' + deliveryPrice}</h3>
                </div>

                <div className='subtotal'>
                    <h3>Total</h3>
                    <h3>{'$' + totalPrice}</h3>
                </div>
                <button className='checkout-btn' onClick={() => alert('The checkout feature will be implemented soon')}>Checkout</button>
            </div>
            <Ads/>
        </div>
    )
}