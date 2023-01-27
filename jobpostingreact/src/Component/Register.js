import React, { useState } from "react";
import './register.css';
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Register() {
    const navigate = useNavigate();

    let [userdata, setUserdata] = useState({});
    const handlechange = (e) => {
        setUserdata({
            ...userdata,
            [e.target.name]: e.target.value

        })
        console.log("^^^^^");
        console.log(userdata);
    }

    async function registerdata() {
        console.log("********** in registerdata function");
        console.log(userdata);
        try {
            let res = await Axios.post("/user", userdata);
            console.log(res.headers);
            console.log(res.data);
            if (res.data == "Data Added") {
                navigate('/')
            }
        } catch (e) {
            console.log(e);

        }


    }


    return (
        <div className='container'>
            <div className='cont-det'>


                <div className='cont-in'>

                    <h1>USER REGISTRATION</h1>

                                <label>Email:</label>
                              <input type="text" name="email" onChange={handlechange} />
                        
                                <label>Password: </label>
                                <input type="password" name="password" onChange={handlechange} />
 
                    <button className="button" onClick={registerdata}>REGISTER</button>
                </div>
            </div>
        </div>
    );
}