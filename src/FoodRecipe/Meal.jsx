import { useEffect, useState } from "react";
import "./App.css";
function Meal() {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("Indian");
  const [inputData, setInputData] = useState("");
  useEffect(() => {
    const Fetchdata = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      console.log(data.meals);
      setMealData(data.meals);
    };
    Fetchdata();
  }, [area]);
  const sumbitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`
    );
    const data = await api.json();
    console.log(data.meals);
      setMealData(data.meals);
      inputData(" ");
  };
  return (
    <>
      <div
        className="mx-auto text-center"
        style={{ background: "black", display: "flex" }}
      >
        <button
          onClick={() => setArea("indian")}
          type="button"
          className="btn btn-primary  mx-2 my-2"
        > 
          Best Quality Food
        </button>
        <form onSubmit={sumbitHandler} className="mx-auto  text-center my-3">
          <input
            type="text"
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Enter Your Fav Food..."
          />
        </form>
        <button
          onClick={() => setArea("indian")}
          type="button"
          className="btn btn-outline-primary   mx-3"
        >
          Indian
        </button>
        <button
          onClick={() => setArea("canadian")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          Canadian
        </button>
        <button
          onClick={() => setArea("american")}
          type="button"
          className="btn btn-outline-light   mx-3"
        >
          American
        </button>
        <button
          onClick={() => setArea("thai")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          Thai
        </button>
        <button
          onClick={() => setArea("british")}
          type="button"
          className="btn btn-outline-warning mx-3"
        >
          British
        </button>
        <button
          onClick={() => setArea("russian")}
          type="button"
          className="btn btn-outline-info mx-3"
        >
          Russian
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "20px",
          background: "black",
        }}
      >
        {mealData.map((data) => (
          <div
            key={data.idMeal}
            style={{ textAlign: "center", margin: "20px" }}
          >
            <div>
              <img
                src={data.strMealThumb}
                alt="food-images"
                style={{
                  width: "220px",
                  borderRadius: "10px",
                  border: "2px solid yellow",
                }}
              />
            </div>
            <h3 style={{ fontFamily: "revert-layer", color: "white" }}>
              {data.strMeal}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
}
export default Meal;
