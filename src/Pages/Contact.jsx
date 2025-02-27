import React, { useState } from "react";

export const Contact=()=> {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [msg, setmsg] = useState("");
  const submithandle = (e) => {
    e.preventDefault();
    console.log("email is:", email);
    console.log("password is:", password);
    console.log("message is:",msg);
    email = "",
      password = "",
      msg=""
  };
  return (
    <>
      <div
        className="container-fluid bg-dark d-flex justify-content-center align-items-center  "
        style={{ width: "100vw", height: "100vh" }}
      >
        <div
          className="border border-success-subtle rounded-5 d-flex justify-content-center align-items-center  border-opacity-75 "
          style={{ width: "550px", height: "500px" }}
        >
          <form
            onSubmit={(e) => {
              submithandle(e);
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
              name="userpassword"
              placeholder="Enter password"
              className="d-block my-4 border-success-subtle rounded-5 border-2 bg-dark  p-4 text-white"
            />
            <textarea
              name="message"
              onChange={(e)=> setmsg(e.target.value)}
              required
              placeholder="Enter your message..."
              className=" form-control my-4 border-success-subtle rounded-5 border-2  p-4 bg-dark text-white"
              rows={10}
              style={{ color: "white" }}
              autoComplete="false"
            ></textarea>
            <button
              type="submit"
              value="send"
              className="btn btn-success   rounded-pill "
              style={{ width: "300px", height: "40px" }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
