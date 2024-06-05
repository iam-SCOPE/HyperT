import {Link} from 'react-router-dom'
import './header.css'
import { useContext } from 'react';
import { CartContext } from './context';

export default function Header()
{
    const [cartCount] = useContext(CartContext);

    return (
        <header className='header-container'>
            <h1 className='website-logo'>HyperT</h1>
            <Link to='/checkout' className='cart'>
                <div className='cart-container'>
                    <div className='cart-product-count' style={{display: cartCount === 0 ? 'none' : 'flex'}}>
                        {cartCount}
                    </div>
                </div>
            </Link>
        </header>
    );
}