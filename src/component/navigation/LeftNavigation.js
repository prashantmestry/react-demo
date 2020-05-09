import React from 'react';
import { Link } from 'react-router-dom';
import './LeftNavigation.css';

const LeftNavigation = (props) => {
    return (
        <>
            <input type="checkbox" id="check" />
            <label for="check">
                <i class="fas fa-bars" id="btn"></i>
                <i class="fas fa-times" id="cancel"></i>
            </label>

            <div className='sidebar'>
                <header>My App</header>
                <ul>
                    <li><Link to='/'  ><span><i class="fas fa-adjust"></i>Dashbord</span></Link></li>
                    <li><Link to='/about'  ><span><i class="fas fa-archway"></i>About</span></Link></li>
                    <li><Link to='/shop'  ><span><i class="fas fa-stream"></i>Shop</span></Link></li>
                    <li><Link to='/career'  ><span><i class="fab fa-apple"></i>Career</span></Link></li>
                    <li><Link to='/contact'  ><span><i class="fas fa-envelope"></i>Contact</span></Link></li>
                </ul>
            </div>
        </>
    )
}

export default LeftNavigation

