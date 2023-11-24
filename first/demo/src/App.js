import React, { useEffect, useState } from "react";
import axios from 'axios';
import ProductPage from "./Product";

export default function App(props) {

    const [itemValues, setItemValues] = useState([])
    const checkedList = []

    const handleClick = (clickedValue) => {
        checkedList.push(clickedValue)
        passFunc()
    }

    const passFunc = () => {
        props.checkedList(checkedList)
    }

    const retrieveData = async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then(res => setItemValues(res.data))
    }

    useEffect(() => {
        retrieveData()
    }, [])

    return (
        <>
            <table>
                <tr>
                    <th> ID </th>
                    <th> Title </th>
                    <th> Price </th>
                    <th> Description </th>
                    <th> Category </th>
                    <th> Image </th>
                    <th> Rating </th>
                    {/* <th> Action </th> */}
                </tr>
                {itemValues.map(val =>
                    <tr>
                        <th>{val.id}</th>
                        <th>{val.title}</th>
                        <th>{val.price}</th>
                        <th>{val.description}</th>
                        <th>{val.category}</th>
                        {/* <th><img src={val.image} style={{'position' : 'absolute' , 'left' : 0, 'right': 0, 'width': '100%', 'objectFit': 'cover', 'objectPosition': 'center'}}></img></th> */}
                        <th><img src={val.image}></img></th>
                        <th> <button onClick={() => handleClick(val)}> Add </button></th>
                    </tr>)}
            </table>
            <button onClick={handleClick}> Submit </button>
            {/* <p> before </p>
            {itemValues.map((products) => {
                <ProductPage key={products.id} product={products} />
            })}
            <button onClick={passFunc}> Submit </button> */}
        </>
    )
}