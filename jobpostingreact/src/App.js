import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect,useContext} from "react";
import {
 
  Routes,
  Route,

} from "react-router-dom";
import Login from './Component/Login'
import Header from './Component/Header'
import Mheader from './Component/Mheader'
import Alljobs from './Component/Alljobs'
// import Card from './Component/Card';
import Subsnap from './Component/Subsnap';
import DataContext from "./Context/DataContext.js"


function App() {
  let ctx = useContext(DataContext);
  return (<>
    {ctx.isloggedein?<Header />:<Mheader />}
    <Routes>
    
    <Route element={<Login />} path="/" />
    <Route element={<Alljobs />} path="/dashboard" />
    {/* <Route element={<Card />} path="/card" /> */}
    <Route element={<Subsnap />} path="/snapshot" />

    </Routes></>
  );
}

export default App;
