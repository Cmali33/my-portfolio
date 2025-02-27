import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Herosection = () => {
    return <>
        <main>
          <div
            className="container-md"
            style={{
              color: "white",
              width: "80vw",
              height: "80vh",
              padding: "100px",
            }}
          >
            <div className="row ">
              <div className="col  ">
                <h1
                  className="h1 mb-4 "
                  style={{ marginTop: "50px" }}
                >
                  Explore the World, One <br />
                  Country at a Time.
                </h1>
                <p className="h5">
                  Discover the history,culture,and beauty of every nation. Sort,
                  search, and filter through countries to find the details you
                  need.
                </p>
                <button>
                  Start Exploring <FaLongArrowAltRight />
                </button>
              </div>
              <div className="col">
                <img
                  src="/images/halfearth.jpg"
                  alt="world-image"
                  style={{
                    width: "500px",
                    height: "400px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </div>
        </main>
      </>

};
