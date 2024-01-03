import React, { useState } from "react";

export default function Calc() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [kq, setKq] = useState("0");
    return (
        <div>
            
            <label>Nhập a</label> <input type="number" value={a} onChange={(e) => setA(e.target.value)} />
            <br />
            <label>Nhập b</label> <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
            <br />
            <button onClick={() => setKq(`${a} + ${b}=${a * 1 + b * 1}`)}>Cộng</button>
            <button onClick={() => setKq(`${a} - ${b}=${a - b}`)}>Trừ</button>
            <button onClick={() => setKq(`${a} * ${b}=${a * b}`)}>Nhân</button>
            <button onClick={() => setKq(`${a} / ${b}=${a / b}`)}>Chia</button>
            <p>{kq}</p>
        </div>
    );
}
