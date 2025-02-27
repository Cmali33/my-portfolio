import React, { useContext } from "react";
import MoneyContext from "./Context/MoneyContext";

export const Dashboard=()=> {
    console.log(useContext(MoneyContext));
    const data = useContext(MoneyContext);
    return <>
        <h1>Welcome to DashBoard Section...  :)</h1>
        <h3>Money = {data.money}</h3>
        <h3>Dollar=${data.dollar}</h3>
        <h3>Counter ={data.counter}</h3>
        <button onClick={() => { data.setcounter(data.counter + 1) }}>Increment</button>
        <button onClick={() => { data.setcounter(data.counter - 1) }}>Decrement</button>
    </>
}