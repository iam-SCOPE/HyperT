import './cartcheckout.css'
import Ads from './Ads'
import { CartItemsContext } from './context'
import { useContext, useState, useEffect } from 'react'


export default function CartCheckout()
{
    const { cartItems } = useContext(CartItemsContext)
    const [deliveryPrice, setDeliveryPrice] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)



    const checkout = cartItems.map((item) => {
        return(
            <div className='cart-products' key={item.id}>
                <div className='cart-imagextitle'>
                    <img src={item.picture1} alt='cart product' className='cart-product-image'/>
                    <p className='cart-product-title'>{item.title}</p>
                </div>
                <div className='cart-product-price'>{'$' + item.price}</div>
            </div>
        )
    })
    
    useEffect(() => {
        const totals = cartItems.map((item) => item.price)
        if(totals.length !== 0){
            const balance = totals.reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue));
            const delivery = Math.floor(balance / 10)
            const total = Number(balance) + Number(delivery)
            setDeliveryPrice(delivery)
            setTotalPrice(total)
        }
    },[cartItems])


    return(
        <div className="cart-checkout">
            <div className='cart-header'>Cart Items</div>
            <div className='cart-products-container'>
                {checkout}
            </div>
            <div className='checkout-btn-container'>
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