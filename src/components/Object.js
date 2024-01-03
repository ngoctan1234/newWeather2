import React, { useState } from "react";

export default function Object() {
    const [sv, setSv] = useState({ id: 1, name: "Lê Văn Mèo", age: 18 }); //`{ id: 1, name: "Lê Văn Mèo", age: 18 }`
    const [age, setAge] = useState("");
    const [text, setText] = useState("");
    let x = 7;
    function handle_load() {
        let x = localStorage.getItem("sv_key");

        x = JSON.parse(x);
        console.log(x.name);
        setSv({ ...sv, name: x.name, age: x.age });
    }
    return (
        <div>
            <button onClick={handle_load}>Load lại trang</button>
            <br />
            <input
                type="text"
                placeholder="Nhập tên"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        setSv({ ...sv, name: text }); //{ id: 1, age: 18 ,name:'Lê Văn Hiếu'}
                    }
                }}
            />
            <br />
            <input
                type="number"
                placeholder="Nhập tuổi"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key == "Enter") {
                        setSv({ ...sv, age });
                        localStorage.setItem("sv_key", JSON.stringify({ ...sv, age }));
                    }
                }}
            />
            <br />
            <p>
                Name:{sv.name},age:{sv.age}
            </p>
        </div>
    );
}
