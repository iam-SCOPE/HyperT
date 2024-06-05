import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Homepage.css';
import products from '../products.js';
import Header from './Header.js';
import Ads from './Ads.js';
import ProductList from './ProductList.js';
import ScrollToTop from './ScrollToTop.js';


export default function MenPage()
{    
    const menProduct = products.filter((product) => product.category === 'men');

    const men = menProduct.map((product) => {
        return(
            <ProductList product={product} key={product.id}/>
        )
    })

    const [search, setSearch] = useState('');
    const navigate = useNavigate();


    function handleEnterkeyPress(e){
        if((e.key).toLowerCase() === 'enter')
        {
            if(search.length < 1)
            {
                e.preventDefault()
                alert('Search bar must contain what to search for')
            }
            else{
                e.preventDefault()
                localStorage.setItem('searchedProduct', search); 
                navigate('/searchedproduct', {replace: false});
            }
        }
    }
    
    return(
        <div className='landing-page'>
            <Header />
            <ScrollToTop/>

            <div className='search-bar-container'>
                <div className='search-bar-container-inner'>
                    <input placeholder='Search Products' type='text' value={search} onKeyDown={handleEnterkeyPress} onChange={(e) => setSearch(e.target.value)}/>
                    <button disabled={search.length === 0} className='search-button' type='submit' onClick={() => {localStorage.setItem('searchedProduct', search); navigate('/searchedproduct', {replace: false});}}><img src='https://webst-images.s3.eu-north-1.amazonaws.com/white-search-icon.png' alt='search icon' /></button>
                </div>
            </div>

            <div className='filter'>
                <div className='filter-inner'>
                    <Link to={'/'} className='filter-inner-link'><button style={{backgroundColor: 'white'}}>All</button></Link>
                    <Link to={'/menproduct'} className='filter-inner-link'><button style={{backgroundColor: 'green'}}>Men</button></Link>
                    <Link to={'/womenproduct'} className='filter-inner-link'><button style={{backgroundColor: 'white'}}>Women</button></Link>
                </div>
            </div>

            <div className='product-page'>
                {men}
            </div>

            <Ads/>
        </div>
    )
}