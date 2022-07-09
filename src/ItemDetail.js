import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import cart from '../src/cart.png'

const ItemDetail = () => {

    const { id } = useParams()
    const [details, setDeatails] = useState([])


    useEffect(() => {
        const getSpecific = () => {
            axios.get(`https://fakestoreapi.com/products/${id}`).then(res => {
                setDeatails(res.data)
            })
        }
        getSpecific()

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
            <div class="card-body">
                <img src={details.image} class="card-img-toppp" alt={details.description} />
            </div>
            <div class="cardDescriptioN">
                <h5 class="titleDetails">{details.category}</h5>
                <h3 class="mainDetails">{details.title}</h3>
                <h2 class="priceDetails">${details.price}</h2>
                <h5 class="detailsDetails">{details.description}</h5>
            </div>
        </div>
    )
}

export default ItemDetail