import React, {useEffect, useState} from 'react';
import './searchedproductlist.css';
import ProductList from './ProductList';
import products from '../products';
import Ads from './Ads';
import Header from './Header';

export default function SearchedProductList(){
    const [search, setSearch] = useState(localStorage.getItem('searchedProduct'));
    const [productsToDisplay, setProductsToDisplay] = useState('Enter your desired product to search');

    // eslint-disable-next-line
    useEffect(() => {displaySearchedProduct()}, [])
    
    function displaySearchedProduct(){
        const searchedProduct = products.filter((product) => product.title.toLowerCase().includes(search));

        if(searchedProduct.length < 1){
            setProductsToDisplay(<h3 style={{textAlign: 'center'}}>No product match your search, Check back later</h3>)
        }
        else{
            const searchedProductTodisplay = searchedProduct.map((product) => <ProductList product={product} key={product.id}/>)
            setProductsToDisplay(searchedProductTodisplay);
        }
    }

    function handleEnterkeyPress(e){
        if((e.key).toLowerCase() === 'enter')
        {
            if(search.length < 1)
            {
                e.preventDefault()
                alert('Search bar must contain what to search for');
            }
            else{
                e.preventDefault();
                localStorage.setItem('searchedProduct', search);
                displaySearchedProduct()
            }
        }
    }

    return(
        <div className='product-list'>
            <Header/>
            <div className='product-list-header'>
                <form className='product-list-search-form'>
                    <input className='product-list-input' type='text' placeholder='Search Products' value={search} onKeyDown={handleEnterkeyPress} onChange={(e) => setSearch(e.target.value)}/>
                    <button disabled={search.length === 0} className='product-list-search-button' type='submit' onClick={(e) => {e.preventDefault(); localStorage.setItem('searchedProduct', search); displaySearchedProduct()}}><img src='https://webst-images.s3.eu-north-1.amazonaws.com/white-search-icon.png' alt='search button'/></button>
                </form>
            </div>

            <div className='product-list-product-page'>
                {productsToDisplay}
            </div>

            <Ads/>
        </div>
    )
}