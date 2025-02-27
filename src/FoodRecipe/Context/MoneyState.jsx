import React, { useState } from "react";
import MoneyContext from "./MoneyContext"

export const MoneyState = (props) => {
    const money = 1000;
    const dollar = 3;
    const [counter,setcounter] = useState(0);
    return <MoneyContext.Provider value={{ money,dollar, counter, setcounter }}>{props.children}</MoneyContext.Provider>
}
