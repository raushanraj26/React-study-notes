import React from "react";

import ProductDate from './Productdate';
import Card from './Card';


const ProductItem=(props)=>{
       
    //event listener function
    function clickHandler(){
        console.log("button clicked");
    }

    return (
        <Card className='product-item'>
            <ProductDate date={props.date}  />

            <div className='product-item-decsription'>
                <h2>{props.title}</h2>
            </div>
             
             <button onClick={clickHandler}>Add to cart</button>
        </Card>
    )
}

export default ProductItem;