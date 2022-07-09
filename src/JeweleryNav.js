import React, { useState, useEffect } from "react"
import cart from '../src/cart.png'
import axios from "axios";
import { Link } from "react-router-dom";


const JeweleryNav = () => {

    const [jewelery, setJewelery] = useState([])

    const JeweleryApi = () => {
        axios.get("https://fakestoreapi.com/products/category/jewelery").then(res => {
            setJewelery(res.data)
        })
    }

    useEffect(() => {
        JeweleryApi()
    }, [])

    return (
        <div>
            <div class="NavBarHome">
                <a href='/home'><img src={cart} class="cartimgHome" alt="cart image" /></a>
                <ul class="ulHome">
                    <a href='/women'><li>WOMEN</li></a>
                    <a href='/men'><li>MEN</li></a>
                    <a href='/electronics'><li>ELECTRONICS</li></a>
                    <a href='/jewelery'><li>JEWELERY</li></a>
                </ul>
            </div>
            <div class="overallgrid">
                <div class="card">
                    {jewelery.map(clo => (
                        <div class="card-bodyjew" key={clo.id}>
                            <Link to={`/women/${clo.id}`}>
                                <img src={clo.image} class="card-img-topjew" alt="Jewelery Image" />
                                <div >
                                    <h5 class="card-title">{clo.title}</h5>
                                    <p class="card-text">${clo.price}</p>
                                </div>
                            </Link>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default JeweleryNav