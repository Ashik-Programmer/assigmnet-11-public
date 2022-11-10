import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/ZK2F4B8/main-banner2.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <button className="btn btn-success ">Buy Now</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/jv1vH9H/main-banner3.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <button className="btn btn-success ">Buy Now</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/P6HCcLt/main-banner1.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <button className="btn btn-success ">Buy Now</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;