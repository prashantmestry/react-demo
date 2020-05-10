import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TopLinks = (props) => {
    return (
        <TopLinkBox>
            <div className='links'>
                <ul>
                    <li><Link to='/'  >Dashbord</Link></li>
                    <li><Link to='/about'  >About</Link></li>
                    <li><Link to='/shop'  >Shop</Link></li>
                    <li><Link to='/career'  >Career</Link></li>
                    <li><Link to='/contact'  >Contact</Link></li>
                </ul>
            </div>
        </TopLinkBox>
    )
}

let TopLinkBox = styled.div`
    background : #032431;    
    box-sizing: border-box;  
    height: 72px; 
`;


export default TopLinks;

