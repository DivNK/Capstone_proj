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
    let [dataappprofile, setDataappprofile] = useState([]);
    let apply=[]
 
    console.log("in Snapshort element");
    console.log(state);
    useEffect(()=>{
        const fetchall = async () =>{
            var url="/job"
            setStr("Jobs in Domain")
            if(state=="i-box2")
            {
                setStr("Eligible Jobs")
                url="/searcheligible"
            }if(state=="i-box3")
            {
                setStr("Applied Jobs")
                url="/appliedjob"
            }
            try{
                let res = await Axios.get(url); // if you use proxy then only /book isusing cros gem then complete path
                let resappprofile = await Axios.get("/appprofile");
            console.log(res.data);
            console.log("Inside Snapshot Menu");
            console.log(str);
            setDatacd(res.data)
            setDataappprofile(resappprofile.data)

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
    datacd.map((job,i)=>{
        let str=dataappprofile.filter((e)=>e.jobid==job.id)
        console.log(job)
        console.log(i)
        console.log(str.length>0);
        if(str.length>0)
        {
           apply.push(false)
        }else
        {
            apply.push(true)
        }
        
     } )
    return (
        <>
           <Search str={str}></Search>
           {datacd.length?datacd.map((a,i)=><Card jobdata={a} app={apply[i]}></Card>):<div>No data</div>}
        </>

    )

}