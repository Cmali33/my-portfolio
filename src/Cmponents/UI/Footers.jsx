import { MdPlace } from "react-icons/md";
import Footerapi from "../../api/Footerapi.json";
import { TbMailPlus } from "react-icons/tb";
import { IoCallSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
export const Footers = () => {
  const FooterIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };
  return (
    <>
      <div
        className="container p-4"
        style={{
          marginTop: "50px",
          background: "#3224",
          height: "130px",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <div className="row">
          {Footerapi.map((data) => {
            const { icon, title, details } = data;
            return (
              <div
                className="container col "
                key={data.icon}
                style={{
                  color: "snow",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <div className="d-inline p-4">
                  <h1 className="d-inline text-info">{FooterIcon[icon]}</h1>
                </div>
                <p>{title}</p>
                <p>{details}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="container"
        style={{ background: "#3204", height: "60px" }}
      >
        <div className="row">
          <div className="col-6 mt-3 text-center">
            <p>
              Copyright &copy; 2024,ALL Right Reserved 
              <NavLink style={{ textDecoration: "none" }} to="/">
                WorldAtlash
              </NavLink>
            </p>
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
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to="https://www.instagram.com/"
                  >
                    Social
                  </NavLink>
                </li>
                <li className="d-inline mx-4 h6">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to="/https://in.linkedin.com/"
                  >
                    LinkedIn
                  </NavLink>
                </li>
                <li className="d-inline mx-4 h6 ">
                  <NavLink style={{ textDecoration: "none" }} to="/contact">
                    Contact
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
