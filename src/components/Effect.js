import React, { useEffect, useState } from "react";
import axios from 'axios';
export default function Effect() {
    const [quant, setQuant] = useState(1);
    const [price, setPrice] = useState(0);
    const handle_quant = () => {
        setQuant(quant + 1);
    };
    const handle_price = () => {
        setPrice(price + 10);
    };
    useEffect(() => {
        setPrice(price + 10);
    }, [quant]);
    console.log("render");
    return (
        <div>
            <h1>quant: {quant}</h1>
            <input type="button" value="quant" onClick={handle_quant} />
            <h1>Price: {price}</h1>
            <input type="button" value="Price" onClick={handle_price} />
        </div>
    );
}
