import React,{useState,useEffect,useContext} from "react";
import DataContext from "../Context/DataContext"

import { useNavigate } from "react-router-dom";
import Axios from "axios"
import {

    Link

} from "react-router-dom";

import "./login.css"

export default function App() {



    let ctx = useContext(DataContext);

    const navigate = useNavigate();


    useEffect(()=>{
        const fetchall = async () =>{
            try{
                let res = await Axios.get("/logout");
                console.log(res.data);
                if(res.data.includes("Logged")) {
                    console.log("in logged out");
                    ctx.setisloggedIn(false)
                    ctx.setEmail("")
                    ctx.setPic("images/profile.png")
                    navigate('/')
                }
                    else{
                        
                        navigate('/dashboard')
                    }
            
       

        }catch(e)
        {
            
            console.log(e);
        }

        }
        fetchall()
    },[])


   
    }