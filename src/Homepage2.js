import React, { useState, useEffect } from 'react'
import axios from 'axios'
import cart from '../src/cart.png'
import EndBar from './EndBar'
import CarouselImages from './CarouselImages'
import { Link } from "react-router-dom";

const Homepage2 = () => {

    const [mainDisplay, setMainDisplay] = useState([])
    const [jeweleryApi, setjeweleryApi] = useState([])


    const getApi = () => {
        axios.get("https://fakestoreapi.com/products?limit=3").then(res => {
            setMainDisplay(res.data)
        })
    }

    const getJewelery = () => {
        axios.get("https://fakestoreapi.com/products/category/electronics?limit=4").then(res => {
            setjeweleryApi(res.data)
        })
    }

    useEffect(() => {
        getApi();
        getJewelery()
    }, [])


    return (
        <div >
            <div class="NavBarHome">
                <a href='/home2'><img src={cart} class="cartimgHome" alt="cart image" /></a> 
                <ul class="ulHome">
                    <a href='/women'><li>WOMEN</li></a>
                    <a href='/men'><li>MEN</li></a>
                    <a href='/electronics'><li>ELECTRONICS</li></a>
                    <a href='/jewelery'><li>JEWELERY</li></a>
                </ul>
            </div>
            <div class="container">
                {mainDisplay.map(mai => (
                    <div key={mai.id}>
                        <Link to={`/home2/${mai.id}`} class="cardimg">
                            <img src={mai.image} />
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                <h1 class="LastestHome">LASTEST PRODUCTS</h1>
            </div>
            <div class="jeweleryLastest">
                {jeweleryApi.map(ai => (
                    <div class="jewe" key={ai.id}>
                        <Link to={`/home2/${ai.id}`} >
                            <div class="JeweleryCardimg" ><img src={ai.image} alt="Homepage Images" /></div>
                            <div class="Jewelerytitle">{ai.title}</div>
                            <div class="Jeweleryprice">${ai.price}</div>
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                <h1 class="Popular">POPULAR RIGHT NOW</h1>
            </div>
            <CarouselImages />
            <EndBar />
        </div>
    )
}

export default Homepage2