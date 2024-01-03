import React, { useState } from "react";

export default function Name() {
    const [name, setName] = useState("Nguyễn Văn Mèo");
    function handle_name(e) {
        setName(e.target.value);//name=e.target.value
    }
    return (
        <div>
            <input type="text" value={name} onChange={handle_name} />
            <p>Name: {name}</p>
        </div>
    );
}
