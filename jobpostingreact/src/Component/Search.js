import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import {
 
    Link
      
      } from "react-router-dom";
import "./search.css"
    
export default function App()
{
    return(
    <div className="srch">
         <div>All Jobs</div>
        <div className="srch-in">
                  
                   <form className="frmsrch">
            
            <input className="frmin" type="text" placeholder="Title,Client,Location" style={{fontSize:15}}></input>
            <button className="srchbutton">Search</button>
        </form>
                   
                    </div>
                    </div>
                        
                        );
    }