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
                    <div className="sec2">
                    <div className="ind-dash">
                            <div> Dashboard</div>
                    </div>
                    <div className="ind-p">
                            <div> Application Profile</div>
                    </div>
                    <div className="ind-aj">
                            <div> Applied Jobs</div>
                    </div>
                    <div className="ind-act">
                            <div> Activity</div>
                    </div>
                    <div className="ind-ja">
                            <div> Job Agent</div>
                    </div>
                    </div>
                    <div className="sec3">
                    <Link to="/updateprofile">
                    <img src={ctx.pic} width="25" />
                        </Link>
                    </div>
                    </div>
                    </div>
                        
                        );
    }