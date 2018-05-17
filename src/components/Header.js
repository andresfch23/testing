import React, { Component } from 'react';
import Carousel from './Carousel';
import Image1 from '../assets/images/1.jpg';
import Image2 from '../assets/images/2.jpg';
import Image3 from '../assets/images/3.jpg';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <h1 className="header__title">This is the carousel of the header</h1>
                <Carousel images={[Image1 ,Image2 ,Image3]} />
            </div>
        );
    }
}

export default Header;