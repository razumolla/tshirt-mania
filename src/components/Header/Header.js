import React from 'react';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink'
const Header = () => {
    return (
        <div>
            <h2>Welcome to TShirt Mania</h2>
            <nav className='custom-link'>
                <CustomLink className="item-link" to="/home">Home</CustomLink>
                <CustomLink className="item-link" to="/orderreview">OrderReview</CustomLink>
                <CustomLink className="item-link" to="/grandpa">Grandpa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;