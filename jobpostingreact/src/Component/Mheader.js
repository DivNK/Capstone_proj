import React,{useState,useEffect,useContext} from "react";
import DataContext from "../Context/DataContext"
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import {
 
    Link
      
      } from "react-router-dom";
import "./header.css"
    
export default function App()
{
        let ctx = useContext(DataContext);
    return(
    <div className="header">
        <div className="container_header">
                    <div className="sec1">
                    <div >
                            <img src="images/logo.png" />
                    </div>
                    </div>
                    </div>
                    </div>
                        
                        );
    }