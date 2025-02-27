import { useRouteError } from "react-router";
import { NavLink } from "react-router-dom";
export const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <div>
        <h1>Oops! An error occurred.</h1>
        {error && <p>{error.data}</p>}
        <NavLink to="/">
          <button>Go Back Home </button>
        </NavLink>
      </div>
    </>
  );
};
