import React, { useState, useEffect } from "react"
import cart from '../src/cart.png'
import axios from "axios";
import { Link } from "react-router-dom";


const WomensNav = () => {

    const [womensClo, setWomensClo] = useState([])

    const Womensclothing = () => {
        axios.get("https://fakestoreapi.com/products/category/women's clothing").then(res => {
            setWomensClo(res.data)
        })
    }

    useEffect(() => {
        Womensclothing()
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
                    {womensClo.map(clo => (
                        <div class="card-body" key={clo.id}>
                            <Link to={`/women/${clo.id}`}>
                                <img src={clo.image} class="card-img-top" alt="Woman's Clothing" />
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

export default WomensNav