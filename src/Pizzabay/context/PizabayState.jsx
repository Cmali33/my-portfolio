import { useContext, useEffect } from "react";
import { React, useState } from "react";
import PizabayContext from "./PizabayContext";
const PizabayState = (props) => {
    const [imageData,setImageData] = useState([]);
    const api_key = "47201960-7fa80b39846cc1e7162106c76";
    useEffect(() => {
        const FetchData = async () => {
             const api =await fetch(
               `https://pixabay.com/api/?key=${api_key}&q=London&image_type=photo&per_page=100`
            );
            const data = await api.json();
            setImageData(data.hits)
            console.log(data);
            
        }
        FetchData();
     },[])
    return <>
        <PizabayContext.Provider value={{imageData}}>{ props.children}</PizabayContext.Provider>
    </>
}
export default PizabayState;