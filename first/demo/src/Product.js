import React, { useState } from "react";

const ProductPage = ({product}) => {

    console.log({product}, 'product')
    return(
        <div>
            {/* <img src={product.title}></img> */}
            <p> {product.title} </p>
        </div>
    )
}

export default ProductPage