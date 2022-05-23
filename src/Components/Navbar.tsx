import {Connect} from './Connect'
import {BrowserRouter, Route, Link} from "react-router-dom"

// STYLES
import './Navbar.css'

export const Navbar = () => {
    
    return(
        
    <div className='container'>
        <ul>
            <li>
                <Link to='/' className="">Home</Link>
            </li>
            <li>
                <Link to='/mint' className="">Mint</Link>
            </li>
            <li>
                <Link to='/redeem' className="">Redeem</Link>
            </li>
            <li>
                <Link to='/trade' className="">Trade</Link>
            </li>
            <li className="align-left">
                <Connect/>
            </li>

        </ul>
    </div>
    );
}
