import Header from './Header'
import Ads from './Ads'
import products from '../products'
import './productdetails.css'
import {useParams} from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

export default function Productdetails()
{
    const { productId } = useParams()

    return(
        <div className="product-details">
            <Header/>
            <ScrollToTop/>
            <div className='product-details-container'>
                <div className='product-varieties'>
                    <img className='product-detail-images' src={products[productId].picture1} alt='images'/>
                    <img className='product-detail-images' src={products[productId].picture2} alt='images'/>
                    <img className='product-detail-images' src={products[productId].picture3} alt='images'/>
                    <img className='product-detail-images' src={products[productId].picture4} alt='images'/>
                </div>
                <div className='product-info'>
                    <h3 className='product-info-title'>{products[productId].title}</h3>
                    <h3 className='product-info-price'>{'$' + products[productId].price}</h3>
                    <h3 className='product-info-prod-desc'>Product Description</h3>
                    <p className='product-info-description'>{products[productId].description}</p>
                </div>
                <div className='d-and-r'>
                    <p>Delivery and Returns Info</p>
                    <h3 className='d-and-r-logo'>HyperT <span className='d-and-r-span'>EXPRESS</span></h3>
                    <p>Free delivery on thousands of products in our selected locations</p>
                    <h3>Choose Location</h3>
                    <select className='d-and-r-select'>
                        <option>Nigeria</option>
                        <option>USA</option>
                        <option>United Kingdom</option>
                        <option>Italy</option>
                        <option>Switzerland</option>
                    </select>
                    <h3>Pickup Station</h3>
                    <p>Delivery fees $9.99</p>
                    <p style={{marginBottom: '20px'}}>Arriving at pickup station 1 week after order confirmation</p>
                    <h3>Door Delivery</h3>
                    <p>Delivery fees $10.99</p>
                    <p style={{marginBottom: '20px'}}>Ready for delivery 1 week after order confirmation</p>
                    <h3>Return Policy</h3>
                    <p>Free return within 7 days for all eligible items</p>
                </div>
            </div>
            <Ads/>
        </div>
    )
}