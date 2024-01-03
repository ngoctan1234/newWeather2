import React, { useState } from "react";

export default function CountDown() {
    const [count, setCount] = useState(6);
    function handle_count_down() {
        setCount(count - 1); //cout=count-1
    }
    console.log("render count down");
    let count2 = 6;
    return (
        <div>
            <p> Count: {count}</p>
            <button onClick={handle_count_down}>Count down</button>
        </div>
    );
}
