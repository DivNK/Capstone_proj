import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import Search from "./Search"
import "./tbl.css"

import Axios from "axios"
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();
    let [datacd, setDatacd] = useState([]);
    let [str, setStr] = useState('');
    const { state } = useLocation();
 
    console.log("in MyApplication element");
    console.log(state);
    var colortxt=""
    if(state=="i-box1a")
    {
       
        colortxt="#006FCB"
    }
    if(state=="i-box2a")
    {
       
        colortxt="#006FCB"
    }if(state=="i-box3a")
    {
       
        colortxt="#FF0000"


    }if(state=="i-box4a")
    {
        colortxt="#38A743"
    }
    useEffect(()=>{
        const fetchall = async () =>{
            
            var url=""
            

            if(state=="i-box1a")
            {
                setStr("Shortlisted")
                url="/shortlisted"
                
            }
            if(state=="i-box2a")
            {
                setStr("Interviewing")
                url="/interview"
                colortxt="#006FCB"
            }if(state=="i-box3a")
            {
                setStr("Rejected")
                url="/reject"
                colortxt="#FF0000"
                console.log("========");
                console.log(url);
                console.log(colortxt);

            }if(state=="i-box4a")
            {
                setStr("Offer Recieved")
                url="/offer"
                colortxt="#38A743"
            }
            try{
                let res = await Axios.get(url); 
         
            console.log(res.data);
            console.log("Inside Myapplication Menu");
            console.log(str);
            setDatacd(res.data)

        }catch(e)
        {
            
            console.log(e);
            navigate(-1)
        }

        }
        fetchall()
    },[])
    console.log("data");
    console.log(datacd.length);
    console.log(str);
    console.log(colortxt);

    return (
        <>
           <Search str={str}></Search>
           <table>
                <th>Job Code</th>
                <th>Job Title</th>
                <th>Location</th>
                <th>Posted Date</th>
                <th>Applied Date</th>
                <th>Status</th>
           {datacd.length?datacd.map((a)=>
            <tr>
                <td style={{color:"#006FCB"}}>{a.jobcode}</td>
                <td>{a.jobtitle}</td>
                <td>{a.location}</td>
                <td>{a.posteddate}</td>
                <td>{a.applieddate}</td>
                <td style={{color: colortxt}}>{a.candidateappstatus}</td>
            </tr>
            

           ):<div>No data</div>}
           </table>
        </>

    )

}