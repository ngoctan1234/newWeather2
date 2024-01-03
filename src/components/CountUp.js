import React, { useState } from "react";

export default function CountUp() {
    const [count, setCount] = useState(6);
    function handle_count_up() {
        setCount(count + 1); //cout=count+1, count++
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
    }
    console.log("render count up");
    return (
        <div>
           
            <p> Count up: {count}</p>
            <button onClick={handle_count_up}>Count up</button>
        </div>
    );
}
