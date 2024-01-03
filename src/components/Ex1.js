import React, { useState } from "react";

export default function Ex1() {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [year, setYear] = useState("");
    const [age, setAge] = useState("");
    console.log("2" === 2); //false, 3 dấu bằng so sánh giá trị và kiểu dữ liệu
    console.log("2" == 2); //true,2 dấu bằng so sánh giá trị
    // function handle_keydown(e) {

    // }
    //arrow function
    const handle_keydown = (e) => {
        if (e.key == "Enter") {
            setAge(new Date().getFullYear() - year);
            setName(text);
        }
    };
    // function nhan(x, y) {
    //     return x * y;
    // }
    // const nhan = (x, y) => {
    //     return x * y;
    // };
    const q1 = ["Jan", "Feb", "Mar"];
    const q2 = ["Apr", "May", "Jun"];
    const q3 = ["Jul", "Aug", "Sep"];
    const q4 = ["Oct", "Nov", "May"];
    const o1 = { name: "Meo", age: 3 };

    const o2 = { name: "Gà", age: 4 };
    const list = [...q1, ...q2]; //   ["Jan", "Feb", "Mar","Apr", "May", "Jun"]
    let newObject = { ...o1, ...o2 }; //{name:"Meo",age:3,name:"Gà",age:4}

    console.log(newObject);
    console.log({ id: 4, name: "Meo", age: 3, name: "Gà", age: 4, sex: "male" });

    newObject = { ...o1, name: "cho" }; //{ age: 3 ,name:"cho"}
    console.log(newObject);
    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Nhập tên" /> <br />
            <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Nhập tuổi" onKeyDown={handle_keydown} /> <br />
            <p>
                {name && "Name: " + name}
                {age && ", Age: " + age}
            </p>
        </div>
    );
}
