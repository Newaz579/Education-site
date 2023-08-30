import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HomeLogo1 from '../../Assets/HomeLogo/CLogo.png';
import HomeLogo2 from '../../Assets/HomeLogo/C++Logo.png';
import HomeLogo3 from '../../Assets/HomeLogo/JSLogo.png';

const Home = () => {
    return (
        <div>
            <h1>Welcome to The Programming World</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="m-auto d-block w-50"
                        src={HomeLogo1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="m-auto d-block w-50"
                        src={HomeLogo2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="m-auto d-block w-50"
                        src={HomeLogo3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;