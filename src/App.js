import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Productdetails from './components/ProductDetails';
import CartCheckout from './components/CartCheckout';
import Notfound from './components/Notfound';
import { CartContext, CartItemsContext } from './components/context';
import { useState } from 'react';

function App() 
{
    const [cartCount, setCartCount] = useState(0)
    const [cartItems, setCartItems] = useState([])


    function addToCart(product){
        setCartItems([...cartItems, product])
    }

    function removeFromCart(product)
    {
        const newArray = cartItems.filter(item => item !== product)
        setCartItems(newArray)
    }

    return (
        <BrowserRouter>
            <div className="App">
                <CartContext.Provider value={[cartCount, setCartCount]}>
                    <CartItemsContext.Provider value={{cartItems, setCartItems, addToCart, removeFromCart}}>
                            <Routes>
                                <Route exact path='/' element={<HomePage/>}/>
                                <Route exact path='/productdetails/:productId' element={<Productdetails/>}/>
                                <Route exact path='/checkout' element={<CartCheckout/>}/>
                                <Route path='*' element={<Notfound/>}/>
                            </Routes>
                    </CartItemsContext.Provider>
                </CartContext.Provider>
            </div>
        </BrowserRouter>
    );
}

export default App;
