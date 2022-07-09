import React, { useState, useEffect } from "react"
import cart from '../src/cart.png'
import axios from "axios";
import { Link } from "react-router-dom";


const MenNav = () => {

    const [menClo, setMenClo] = useState([])

    const Menclothing = () => {
        axios.get("https://fakestoreapi.com/products/category/men's clothing").then(res => {
            setMenClo(res.data)
        })
    }

    useEffect(() => {
        Menclothing()
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
                    {menClo.map(lo => (
                        <div class="card-body" key={lo.id}>
                            <Link to={`/men/${lo.id}`}>
                                <img src={lo.image} class="card-img-top" alt="Mens Clothing" />
                                <h5 >{lo.title}</h5>
                                <p >${lo.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenNav