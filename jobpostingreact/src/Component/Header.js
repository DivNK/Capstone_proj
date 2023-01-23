import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import {
 
    Link
      
      } from "react-router-dom";
import "./header.css"
    
export default function App()
{
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
                    <img src="https://cdn.iconscout.com/icon/free/png-128/avatar-365-456317.png" width="25" />
                    </div>
                    </div>
                    </div>
                        
                        );
    }