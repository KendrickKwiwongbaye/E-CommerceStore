import React, { useState, useEffect } from "react"
import cart from '../src/cart.png'
import axios from "axios";
import { Link } from "react-router-dom";


const ElectronicsNav = () => {

    const [electronicsArray, setElectronicsArray] = useState([])

    const elec = () => {
        axios.get("https://fakestoreapi.com/products/category/electronics").then(res => {
            setElectronicsArray(res.data)
        })
    }

    useEffect(() => {
        elec()
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
                    {electronicsArray.map(clo => (
                        <div class="card-bodyele" key={clo.id}>
                            <Link to={`/electronics/${clo.id}`}>
                                <img src={clo.image} class="card-img-topele" alt="Electronics Images" />
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

export default ElectronicsNav