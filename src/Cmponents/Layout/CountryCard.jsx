import React from "react";
export const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;
  return (
    <>
      <div className="card">
        <img src={flags.svg} alt={flags.alt} style={{ width: "100%" }} />

        <p>{name}</p>
        <p>Architect & Engineer</p>
      </div>
    </>
  );
};
