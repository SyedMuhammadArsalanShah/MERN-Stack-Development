import React, { useState, useEffect } from "react";



function LoginForm({ onLogin }) {
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    useEffect(() => {


        console.log("Login Form Mounted ")

    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email && password) {
            onLogin(email)
        } else {
            alert("Please insert your details ");
        }



    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Form Hai</h1>

            <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <br />

            <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />


            <br />
            <button type="submit" >Login</button>
        </form>


    );
}


export default LoginForm;