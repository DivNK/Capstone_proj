import "./snapshot.css"
import React, { useState, useEffect } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom";
import {

    Link, Navigate

} from "react-router-dom";




export default function App() {

    const navigate = useNavigate();
    let [data, setData] = useState([]);
    
    let [inputValue, setinputValue] = useState('')

    useEffect(() => {
        const fetchData = async () => {
           try{
            let res = await Axios.get("/count"); 
            console.log(res.data);
            setData(res.data)
            let subheader = document.querySelector(".row2")
            console.log(subheader.children);
            let childofSubheader = subheader.children;
            for (let i = 0; i < childofSubheader.length; i++){
                console.log(childofSubheader[i]);
                childofSubheader[i].addEventListener("click", (e) => {
                    //change context
                            console.log(e.target.className);
                    navigate("/snapshot",{state:childofSubheader[i].className})
                })
            }

            // arryay of objects
        }catch(e)
        {
            
            console.log(e);
        }
    } 
        {

        }
        fetchData()
    }, [])
    console.log(data);

    
    return (



        <div className='cont-snap'>
            <div className="row1">
                Snapshot
            </div>
            <div className='row2'>
                <div className="i-box1">
                    <div className="rnd1">
                    <img src="images/snap1_1.png" width="50"/>

                    </div>
                    <div className="alljb1">All Jobs
                    <div className="alljb-val1">{data.alljob}</div>
                    </div>
                    
                    <img src="images/arrow.png" />
                       
                        
                    
                </div>
                <div className="i-box2">
                <div className="rnd2">
                    <img src="images/snap2.png" width="50"/>

                    </div>
                    <div className="alljb2">Eligible Jobs
                    <div className="alljb-val2">{data.eligiblejob}</div>
                    </div>
                    <img src="images/arrow.png" />
                </div>
                <div className="i-box3">
                <div className="rnd3">
                    <img src="images/snap3.png" width="50"/>

                    </div>
                    <div className="alljb3">Applied Jobs
                    <div className="alljb-val3">{data.appliedjob}</div>
                    </div>
                    <img src="images/arrow.png" />
                </div>
            </div>
        </div>

    );
}
