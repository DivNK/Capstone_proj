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
    let [dis,setDis] =useState(false)
    let apply =[]
    
    let ctx = useContext(DataContext);
    console.log('email');
    console.log(ctx.email);
    console.log(ctx.isloggedein);
    console.log(ctx.pic);
    const navigate = useNavigate();
    let filterData=[{}]

    useEffect(()=>{
        const fetchall = async () =>{
            try{
                let res = await Axios.get("/job");
                let resappprofile = await Axios.get("/appprofile");
                // let [inputValue, setinputValue] = useState('')
            console.log(res.data);
           
            
            console.log("------------Inside fetch--------------");
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

    useEffect(()=>{

        
        if(ctx.clkcrch==true)
        {
            console.log("set filter");
            console.log(filterData);
            //setData(filterData)
            setDis(true)
            ctx.setClkcrch(false)
    
        }
    },[filterData])
    console.log("data");
 
    console.log(ctx.search.length);
    if(ctx.search.length>0)
    {   
        if(ctx.search[0]!="")
        {
            console.log("Search");
            filterData = data.filter((ele) => ele.location.toLowerCase().includes(ctx.search[0].toLowerCase()) || ele.jobtitle.toLowerCase().includes(ctx.search[0].toLowerCase())|| ele.companyname.toLowerCase().includes(ctx.search[0].toLowerCase()));
 
        }else
        {
            filterData = data
            console.log("change dis");
        
        }
   
    }
   


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
     console.log(dis);
    console.log(apply);
    console.log(data);
    console.log(filterData.length);
return(<>
<Snapshot ></Snapshot>
<Myapp></Myapp>
<Search str="All Jobs"></Search>
{dis?filterData.map((a,i)=><Card jobdata={a} app={apply[i]}></Card>):data.map((a,i)=><Card jobdata={a} app={apply[i]}></Card>)}

</>

);
}
