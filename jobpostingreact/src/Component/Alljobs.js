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
    let ctx = useContext(DataContext);
    console.log('email');
    console.log(ctx.email);
    console.log(ctx.isloggedein);
    console.log(ctx.pic);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchall = async () =>{
            try{let res = await Axios.get("/job"); // if you use proxy then only /book isusing cros gem then complete path
            console.log(res.data);
            console.log("Inside fetch");
            setData(res.data)

        }catch(e)
        {
            
            console.log(e);
        }

        }
        fetchall()
    },[])
    console.log("data");
    console.log(data);


    // if(!ctx.isloggedein)
    // {
    //     navigate('/')
    // }
return(<>
<Snapshot></Snapshot>
<Myapp></Myapp>
<Search str="All Jobs"></Search>
{data.map(a=><Card jobdata={a}></Card>)}

</>

);
}
