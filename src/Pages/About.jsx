import React from "react";
import countryFacts from "../api/countryData.json";
export const About = () => {
  return (
    <>
      <div className="container text-center mt-4">
        <h2 >
          Here are the Interesting Facts
          <br />
          we're proud of
        </h2>
        <div
          className="text-center mt-4 container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,400px)",
            gap: "40px",
          }}
        >
          {countryFacts.map((data) => {
            // const [id,countryName,capital,population,interestingFact] =country
            return (
              <div
                key={data.id}
                className="container text-center bg-black"
                style={{
                  border: "1px solid gray",
                  borderRadius: "20px",
                  width: "400px",
                  textAlign: "center",
                }}
              >
                <div
                 
                  className="card  pt-4 bg-black text-light"
                  style={{
                    width: "18rem",
                    textAlign: "center",
                    alignContent: "center",
                    alignItems: "center",
                    width: "340px",
                    height: "250px",
                  }}
                >
                  <div className="card-body  " >
                    <h5 className="card-title h1">{data.countryName}</h5>
                    <p className="card-subtitle mb-2 h4">
                      CountryName:{data.capital}
                    </p>
                    <p className="card-subtitle mb-2 " >
                      Population:{data.population}
                    </p>
                    <p className="card-text h2" >
                      Id:{data.id}
                    </p>
                    <p className="card-text mt-4 ">
                      {data.interestingFact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
