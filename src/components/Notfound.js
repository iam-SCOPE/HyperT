import './notfound.css'
import Header from './Header'
import Ads from './Ads'
import {Link} from 'react-router-dom'

export default function Notfound()
{
    return (
        <div className='not-found'>
            <Header/>
            <div className='not-found-container'>
                <img className='not-found-image' src='https://webst-images.s3.eu-north-1.amazonaws.com/notfound.jpg' alt=''/>
                <p>Unfortunately, we couldn't find what you're looking for, go back to <Link className='not-found-link' to='/'>Home</Link> page</p>
            </div>
            <Ads/>
        </div>
    )
}