import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Productdetails from './components/ProductDetails';
import CartCheckout from './components/CartCheckout';
import SearchedProductList from './components/SearchedProductList';
import Notfound from './components/Notfound';
import { CartContext, getCookie } from './components/context';
import { useState } from 'react';
import MenPage from './components/MenPage';
import WomenPage from './components/WomenPage';


function App() 
{
    let cartItems = JSON.parse(getCookie("cartItems")) || [];


    const [cartCount, setCartCount] = useState(cartItems.length);

    return (
        <BrowserRouter>
            <div className="App">
                <CartContext.Provider value={[cartCount, setCartCount]}>
                    <Routes>
                        <Route exact path='/' element={<HomePage/>}/>
                        <Route exact path='/menproduct' element={<MenPage/>}/>
                        <Route exact path='/womenproduct' element={<WomenPage/>}/>
                        <Route exact path='/productdetails/:productId' element={<Productdetails/>}/>
                        <Route exact path='/searchedproduct' element={<SearchedProductList/>}/>
                        <Route exact path='/checkout' element={<CartCheckout/>}/>
                        <Route path='*' element={<Notfound/>}/>
                    </Routes>
                </CartContext.Provider>
            </div>
        </BrowserRouter>
    );
}

export default App;
