import React, { Component } from 'react';

class Carousel extends Component {
    constructor(){
        super();

        this.state = {
            position: 0,
        };

        this.renderImages = this.renderImages.bind(this);
        this.clickButtonLeft = this.clickButtonLeft.bind(this);
        this.clickbuttonRight = this.clickbuttonRight.bind(this);
        this.renderDots = this.renderDots.bind(this);
        this.onClickDots = this.onClickDots.bind(this);
        this.renderText = this.renderText.bind(this);
    };

    renderImages() {
       const { position } = this.state;
       const { images } = this.props;

        return <img className="carousel__image" src={images[position]} alt=""></img>
    }

    clickButtonLeft() {
       const { position } = this.state;
       const { images } = this.props;
       const indexImage = images.length - 1;

       if(position === 0) {
            this.setState ({
                position: indexImage,
            });
       } else {
            this.setState ({
                position: position - 1,
            });
       }
    }

    clickbuttonRight() {
       const { position } = this.state;
       const { images } = this.props;
       const indexImage = images.length - 1;

        if(position === indexImage) {
            this.setState ({
                position: 0
            });
        } else {
            this.setState ({
                position: position + 1,
            });
        }
    }

    onClickDots(index) {
        this.setState ({
            position: index,
        });
    }

    renderDots() {
        const { images } = this.props;
        const { position } = this.state;
            
        return images.map((image, index) => {
            return <span className={index === position ? "carousel__dots is-active" : "carousel__dots"} key={index} onClick={() => {this.onClickDots(index)}}></span>
        });
    }

    renderText() {
        const { images } = this.props;
        const { position } = this.state;
            
        return images.map((image, index) => {
            return <h1 className="carousel__text" key={index}>{index === position ? "Esta es la imagen numero " + index : ""}</h1>
        });
    }

    componentDidMount() {
        setInterval(() => {
            this.clickbuttonRight();
        }, 5000);
    }



    render(){
        return(
            <div className="carousel">
                <div>{this.renderImages()}</div>
                <div>{this.renderText()}</div>
                <button className="carousel__button carousel__button--left" onClick={this.clickButtonLeft}>&lt;</button>
                <button className="carousel__button carousel__button--right" onClick={this.clickbuttonRight}>&gt;</button>
                <div className="carousel__buttons">{this.renderDots()}</div>
            </div>
        )
    }
}

export default Carousel;