import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const CarouselImages = () => {

    const [imagesCarousel, setImagesCarousel] = useState([])

    const getJewe = () => {
        axios.get("https://fakestoreapi.com/products/category/jewelery?limit=4").then(res => {
            setImagesCarousel(res.data)
        })
    }

    useEffect(() => {
        getJewe()
    }, [])


    return (
        <div class="cara">
            <Carousel >
                {imagesCarousel.map(review => (
                    <div class="carousel-item img" key={review.id}>
                        <img src={review.image} alt="Carousel Images" />
                        <h3>{review.title}</h3>
                        <p class="carousel-item Text">${review.price}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselImages