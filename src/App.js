import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Productdetails from './components/ProductDetails';
import Notfound from './components/Notfound';

function App() 
{


    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route exact path='/productdetails/:productId' element={<Productdetails/>}/>
                    <Route path='*' element={<Notfound/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
