import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import Search from "./Search"
import Card from "./Card"
import Axios from "axios"
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();
    let [datacd, setDatacd] = useState([]);
    let [str, setStr] = useState('');
    const { state } = useLocation();
 
    console.log("in Snapshort element");
    console.log(state);
    useEffect(()=>{
        const fetchall = async () =>{
            var url="/job"
            setStr("All Jobs")
            if(state=="i-box2")
            {
                setStr("Eligible Jobs")
                url="/searcheligible"
            }else
            {
                setStr("Applied Jobs")
                url="/applied"
            }
            try{let res = await Axios.get(url); // if you use proxy then only /book isusing cros gem then complete path
            console.log(res.data);
            console.log("Inside Snapshot Menu");
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
    console.log(datacd);
    console.log(str);

    return (
        <>
           <Search str={str}></Search>
           {datacd.length?datacd.map(a=><Card jobdata={a}></Card>):<div>No data</div>}
        </>

    )

}