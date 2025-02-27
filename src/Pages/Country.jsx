import React, { useEffect, useTransition, useState, } from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "./Loader";
import { CountryCard } from "../Cmponents/Layout/CountryCard";
export const Country = () => {
  const[isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      console.log(res);
      setCountries(res.data);
      console.log(setCountries);
      
    })
  }, []);
  if (isPending) return <Loader />;
  return (
    <>
      <div className="container" style={{width:"100vw",height:"100vh"}} >
        <ul>
          {countries.map((curcountry, i) => {
            return <CountryCard country={curcountry} key={i} />;
          })}
        </ul>
      </div>
    </>
  );
};
