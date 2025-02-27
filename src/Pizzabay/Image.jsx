// import React, { useContext } from "react";
import PizabayContext from "./context/PizabayContext";

export const Image = () => {
  const { imageData } = useContext(PizabayContext);
  console.log(imageData);

  return (
    <>
      <div className="container my-5">
        <div className="flex">
          {imageData.map((data) => (
            <div key={data.id}>
              <div className="item">
                <img src={data.largeImageURL} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
