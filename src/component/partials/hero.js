import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './partials.css';

class Hero extends Component{
    render(){
        return <Carousel className="hero_box" variant="dark">
                    <Carousel.Item>
                    <Image src="/assets/images/banner_1.jpg" rounded />
                    <Carousel.Caption>
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="/assets/images/banner_2.jpg" rounded />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src="/assets/images/banner_3.jpg" rounded />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
    }
}

export default Hero;