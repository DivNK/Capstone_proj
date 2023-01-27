import React,{useState,useEffect,useContext} from "react";
import DataContext from "../Context/DataContext"

import { useNavigate } from "react-router-dom";
import Axios from "axios"
import {

    Link

} from "react-router-dom";

import "./login.css"

export default function App() {
    // Axios.defaults.withCredentials = true;

    let [login, setLogin] = useState({});
    let ctx = useContext(DataContext);
    const [pwdtry, setPwdtry] = useState(0);
    const [reason, setReason] = useState('');
    const navigate = useNavigate();

    // if(ctx.isloggedein) {
    //     navigate('/dashboard')}

    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
        console.log("**********");
        console.log(login);
    }


    async function sendData() {

        console.log("Enter Send data");
        console.log("**********");
        console.log(login);
      
        try {

            let res = await Axios.post("/login", login,{withCredentials: true})

            console.log(res.headers);
            console.log(res.data);

            if (res.data.id) {

                ctx.setisloggedIn(true)
                if (res.data.pic)
                {
                    console.log("set pic");
                    ctx.setPic(res.data.pic)}
                ctx.setEmail(res.data.email)
            
               
                navigate('/dashboard')
            }
            else
            {

                setPwdtry(pwdtry+1)
               
                    setReason(res.data)
               
            }

        } catch (e) {
            console.log(e);

        }

    }
   
    return (


        <div className='container'>


            <div className='cont-det'>

         
                <div className='cont-in'>
                    <legend >Login Details</legend>
                    
                    <br></br>
                       <div style={{"color":"red"}}>{pwdtry?<>{reason}</>:null}</div>
                    <div className='vals'><p> Email </p><input type="email" name="email" onChange={handleChange} /></div>
                    <div className='vals'> <p>Password</p><input type="password" name="password" onChange={handleChange} /></div>
                    <br></br>
                    <button className="button" onClick={sendData}>Login</button>
                    <Link to="register">New user click here to Register</Link>
                    
                </div>
            </div>
       
        </div>



    );
}