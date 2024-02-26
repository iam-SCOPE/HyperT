import {Link} from 'react-router-dom'
import './header.css'

export default function Header({cartCount})
{
    return (
        <header className='header-container'>
            <h1 className='website-logo'>HyperT</h1>
            <Link to='' className='cart'>
                <div className='cart-container'>
                    <div className='cart-product-count' style={{display: cartCount === 0 ? 'none' : 'flex'}}>
                        {cartCount}
                    </div>
                </div>
            </Link>
        </header>
    );
}