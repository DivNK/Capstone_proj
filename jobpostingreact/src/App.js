import logo from './logo.svg';
import './App.css';
import Axios from "axios"
import React,{useState,useEffect,useContext} from "react";
import {
 
  Routes,
  Route,

} from "react-router-dom";
import Login from './Component/Login'
import Header from './Component/Header'
import Mheader from './Component/Mheader'
import Alljobs from './Component/Alljobs'
import Tbl from './Component/Tbl';
import Subsnap from './Component/Subsnap';
import DataContext from "./Context/DataContext.js"
import Profileupdate from './Component/Profileupdate';
import Register from './Component/Register';
import Logout from './Component/Logout';


function App() {
  let ctx = useContext(DataContext);
  useEffect(()=>{
    const fetchall = async () =>{
        try{
            let res = await Axios.get("/loggedin");
            console.log("***************");
            console.log(res.data);
          ctx.setisloggedIn(res.data.status)
          if(res.data.status)
          {
            if (res.data.pic)
            {
                console.log("set pic");
                ctx.setPic(res.data.pic)
              }
            ctx.setEmail(res.data.email)
          }

    }catch(e)
    {
        
        console.log(e);
    }

    }
    fetchall()
},[])
  

  return (<>
    {ctx.isloggedein?<Header />:<Mheader />}
    <Routes>
    
    <Route element={<Login />} path="/" />
    <Route element={<Alljobs />} path="/dashboard" />
    {/* <Route element={<Card />} path="/card" /> */}
    <Route element={<Subsnap />} path="/snapshot" />
    <Route element={<Tbl />} path="/myappdetails" />
    <Route element={<Profileupdate />} path="/updateprofile" />
    <Route element={<Register />} path="/register" />
    <Route element={<Logout />} path="/logout" />


    </Routes></>
  );
}

export default App;
