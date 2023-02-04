
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./css/home.css"
const host = "http://localhost:4000"
const Home = () => {
    // To Store the value from Frontend
    const [userEmail, setUserEmail] = useState("");
    const [password, setpassword] = useState("");
    console.log(userEmail, password);
    const navigate = useNavigate();

    // Function to send the Data
    const submitData = async () => {

        const response = await fetch(`${host}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: userEmail, password: password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/notes");
        }
        else {
            alert("Invalid credentials");
        }






    };
    // To handle the Default
    const handleSubmit = (event) => {
        event.preventDefault();
        // To submit the Data
        submitData();
        // But Empty the previous Details

        setUserEmail("");
        setpassword("");
    };


    // style css




    return (
        <>
            <div className="header">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="brand">

                        <h1>Piyush</h1>
                    </div>
                    <input className="input"
                        type="text"
                        placeholder="User email"
                        name="user email"
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
                    <button className="button" type="submit">Log In</button>
                    <span>
                        Don't have an account ? <Link to="/register">Create One.</Link>
                    </span>
                </form>
            </div>

        </>




    );
}
export default Home


