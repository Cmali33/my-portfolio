import React, { useState } from "react";

export function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submithandle = (e) => {
    e.preventDefault();
    console.log("email is:", email);
    console.log("password is:", password);
  };
  return (
    <>
      <div
        className="container-fluid bg-dark d-flex justify-content-center align-items-center "
        style={{ width: "100vw", height: "100vh" }}
      >
        <div
          className="border border-success-subtle rounded-5 d-flex justify-content-center align-items-center  border-opacity-75 "
          style={{ width: "500px", height: "400px" }}
        >
          <form
            onSubmit={(e) => {
              submithandle(e)
            }}
          >
            <input
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              style={{ height: "40px", width: "300px" }}
              type="email"
              placeholder="Enter your email"
              className=" border-success-subtle rounded-5 border-2 bg-dark p-4 text-white"
            />
            <input
              style={{ height: "40px", width: "300px" }}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              className="d-block my-4 border-success-subtle rounded-5 border-2 bg-dark  p-4 text-white"
            />
            <button
              type="submit"
              className="btn btn-success   rounded-pill "
              style={{ width: "300px" }}
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
