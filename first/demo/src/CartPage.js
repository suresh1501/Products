import React, { useState } from "react";
import App from "./App";

export default function CartPage(){

    const [checked, setChecked] = useState([])

    const checkedList = (data) => {
        console.log(data, 'data');
        setChecked(data)
    }

    return(
        <>
        <h1> Cart Page </h1>
        <App checkedList={checkedList}></App>
        {checked.map(cval => {
            <p> {cval.title} </p>
        })}
        </>
    )
}