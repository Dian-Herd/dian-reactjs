import React from 'react';
import {Carousel} from 'react-bootstrap';
import image1 from './../Images/10.jpg';
import image2 from './../Images/9.jpg';
import image3 from './../Images/8.jpg';

export default class Header extends React.Component{
    render(){
        return(
                <Carousel fade controls={false}>
                    <Carousel.Item>
                        <img className="d-block w-100" src={image1} alt='First slide' />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>First Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, modi.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100' src={image2} alt='First slide' />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Second Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, modi.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100' src={image3} alt='First slide' />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Third Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, modi.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
        )
    }
}