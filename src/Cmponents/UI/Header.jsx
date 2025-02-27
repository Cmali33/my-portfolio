import { NavLink } from "react-router-dom";

export const Headers = () => {
  return (
    <>
      <div className="container" style={{background:"#324",height:"60px"}}>
        <div className="row">
          <div className="col-6 mt-3 text-center">
            <NavLink style={{ textDecoration: "none" }} to="/">
              <h1 className="">WorldAtlas</h1>
            </NavLink>
          </div>
          <div className="col-4 mt-3  text-center text-white ">
            <nav>
              <ul>
                <li className="d-inline mx-4 h6 ">
                  <NavLink style={{ textDecoration: "none" }} to="/">
                    Home
                  </NavLink>
                </li>
                <li className="d-inline mx-4 h6">
                  <NavLink style={{ textDecoration: "none" }} to="/about">
                    About
                  </NavLink>
                </li>
                <li className="d-inline mx-4 h6">
                  <NavLink style={{ textDecoration: "none" }} to="/country">
                    Country
                  </NavLink>
                </li>
                <li className="d-inline mx-4 h6 ">
                  <NavLink style={{ textDecoration: "none" }} to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="d-inline mx-4 h6 ">
                  <NavLink style={{ textDecoration: "none" }} to="/">
                    Home
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
