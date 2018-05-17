import React, { Component } from 'react';
import Carousel from './Carousel';
import Image1 from '../assets/images/akatsuki.jpg';
import Image2 from '../assets/images/Itachi.jpg';
import Image3 from '../assets/images/jiraiya.jpg';
import Image4 from '../assets/images/kyubi.jpg';
import Image5 from '../assets/images/naruto-kyubi.jpg';
import Image6 from '../assets/images/naruto.jpg'; 

class MainSection extends Component {
    render() {
        return(
            <div className="main">
                <h1 className="main__text">lorem ipsum at dolor lorem ipsum at dolor lorem ipsum at dolor lorem ipsum at dolor lorem ipsum at dolor lorem ipsum at dolor lorem ipsum at dolor lorem ipsum at dolor </h1>
                <Carousel images={[Image1, Image2, Image3, Image4, Image5, Image6]} />
            </div>
        );
    }
}

export default MainSection;