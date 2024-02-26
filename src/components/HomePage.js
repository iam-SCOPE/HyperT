import './Homepage.css'
import products from '../products.js'
import Header from './Header.js'
import Ads from './Ads.js'
import ProductList from './ProductList.js'


export default function HomePage()
{
    const goods = products.map((product) => {
        return(
            <ProductList picture={product.picture1} title={product.title} id={product.id} price={product.price}/>
        )
    })

    return(
        <div className='landing-page'>
            <Header />
            <div className='product-page'>
                {goods}
            </div>
            <Ads/>
        </div>
    )
}