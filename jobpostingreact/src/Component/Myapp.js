import "./myapp.css"
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
            let res = await Axios.get("/countapp"); 
            console.log(("-------------Mya app"));
            console.log(res.data);
            setData(res.data)
            let subheader = document.querySelector(".row2a")
            console.log(subheader.children);
            let childofSubheader = subheader.children;
            for (let i = 0; i < childofSubheader.length; i++){
                console.log(childofSubheader[i]);
                childofSubheader[i].addEventListener("click", (e) => {
                    //change context
                            console.log(e.target.className);
                    navigate("/myappdetails",{state:childofSubheader[i].className})
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
    return (



        <div className='cont-app'>
            <div className="row1a">
                My Application
            </div>
            <div className='row2a'>
                <div className="i-box1a">
                    <div className="rnd1a">
                    <img src="images/myapp1.png" width="30"/>

                    </div>
                    <div className="alljb1a">Shortlisted
                    <div className="alljb-val1a">{data.shotlisted}</div>
                    </div>
                    
                    <img src="images/arrow.png" />
                       
                        
                    
                </div>
                <div className="i-box2a">
                <div className="rnd2a">
                    <img src="images/myapp2.png" width="50"/>

                    </div>
                    <div className="alljb2a">Interviewing
                    <div className="alljb-val2a">{data.Interviewing}</div>
                    </div>
                    <img src="images/arrow.png" />
                </div>
                <div className="i-box3a">
                <div className="rnd3a">
                    <img src="images/myapp3.png" width="50"/>

                    </div>
                    <div className="alljb3a">Rejected
                    <div className="alljb-val3a">{data.Rejected}</div>
                    </div>
                    <img src="images/arrow.png" />
                </div>
                <div className="i-box4a">
                <div className="rnd4a">
                    <img src="images/myapp4.png" width="50"/>

                    </div>
                    <div className="alljb4a">Offer Recieved
                    <div className="alljb-val4a">{data.OfferLetter}</div>
                    </div>
                    <img src="images/arrow.png" />
                </div>
            </div>
        </div>

    );
}
