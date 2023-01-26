import Snapshot from './Snapshot'
import React, { useState,useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import Myapp from "./Myapp"
import Search from "./Search"
import Card from "./Card"
import DataContext from "../Context/DataContext"

export default function App() {
    let [data, setData] = useState([]);
    let [dataappprofile, setDataappprofile] = useState([]);
    let apply =[]
    
    let ctx = useContext(DataContext);
    console.log('email');
    console.log(ctx.email);
    console.log(ctx.isloggedein);
    console.log(ctx.pic);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchall = async () =>{
            try{
                let res = await Axios.get("/job");
                let resappprofile = await Axios.get("/appprofile");
              
            console.log(res.data);
           
            
            console.log("Inside fetch");
            console.log(resappprofile.data);
            setData(res.data)
            setDataappprofile(resappprofile.data)
       

        }catch(e)
        {
            
            console.log(e);
        }

        }
        fetchall()
    },[])
    console.log("data");
    // console.log(data[0].id);


    // if(!ctx.isloggedein)
    // {
    //     navigate('/')
    // }
    data.map((job,i)=>{
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
     console.log("-----------------Fetch-----------------");
    console.log(apply);
    console.log(data);
return(<>
<Snapshot ></Snapshot>
<Myapp></Myapp>
<Search str="All Jobs"></Search>
{data.map((a,i)=><Card jobdata={a} app={apply[i]}></Card>)}

</>

);
}
