import React from 'react'
import {  Link} from 'react-router-dom'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

import "./css/home.css"

const host = "http://localhost:4000"


const Register = () => {
  // To Store the value from Frontend
  const [firstname, setfirstname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setpassword] = useState("");
  console.log( userEmail,firstname,password);
  const navigate = useNavigate();

  // Function to send the Data
  const submitData = async () => {
    const data = {
      name : firstname,
      email: userEmail,
      password,
    };
    const res = await axios.post(`${host}/createuser`, data);
    console.log(res);
    navigate("/");


  };
  // To handle the Default
  const handleSubmit = (event) => {
    event.preventDefault();
    // To submit the Data
    submitData();
    // But Empty the previous Details

    setfirstname("");
    setUserEmail("");
    setpassword("");
  };
//style  css



  


  return (
    <>
            <div className="header">

        <form className="form" action="" onSubmit={handleSubmit}>
          <div className="brand">

            <h1>PIYUSH</h1>
          </div>
          <input className="input"
            type="text"
            placeholder="firstname"
            name="firstname"
            value={firstname}
            onChange={(event) => setfirstname(event.target.value)}
          />
          


          <input className="input"
            type="email"
            placeholder="Email"
            name="email"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
          />
          <input className="input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
          />

          <button className="button" type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/">Login.</Link>
          </span>
        </form>
        </div>
    </>
  );
}

export default Register