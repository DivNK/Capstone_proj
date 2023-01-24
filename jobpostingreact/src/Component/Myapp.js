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

    // useEffect(() => {
    //     const fetchData = async () => {
    //        try{let responseall = await Axios.get("http://127.0.0.1:3001/shortlis"); 
    //        let responseeligible = await Axios.get("http://127.0.0.1:3001/interview"); 
    //        let responseapplied = await Axios.get("http://127.0.0.1:3001/rejected"); 
    // let responseapplied = await Axios.get("http://127.0.0.1:3001/offer"); 
    //         console.log(res.data);
    //         setData(responseall.data)

    //         // arryay of objects
    //     }catch(e)
    //     {
            
    //         console.log(e);
    //     }
    // } 
    //     {

    //     }
    //     fetchData()
    // }, [])
    // console.log(data);


    // let filterData = data.filter((ele) => ele.bookAuthor.toLowerCase().includes(inputValue.toLowerCase()) || ele.bookName.toLowerCase().includes(inputValue.toLowerCase()));

    
    return (



        <div className='cont-app'>
            <div classname="row1a">
                My Application
            </div>
            <div className='row2a'>
                <div className="i-box1a">
                    <div className="rnd1a">
                    <img src="images/myapp1.png" width="30"/>

                    </div>
                    <div className="alljb1a">Shortlisted
                    <div className="alljb-val1a">100</div>
                    </div>
                    
                    <img src="images/arrow.png" />
                       
                        
                    
                </div>
                <div className="i-box2a">
                <div className="rnd2a">
                    <img src="images/myapp2.png" width="50"/>

                    </div>
                    <div className="alljb2a">Interviewing
                    <div className="alljb-val2a">80</div>
                    </div>
                    <img src="images/arrow.png" />
                </div>
                <div className="i-box3a">
                <div className="rnd3a">
                    <img src="images/myapp3.png" width="50"/>

                    </div>
                    <div className="alljb3a">Rejected
                    <div className="alljb-val3a">70</div>
                    </div>
                    <img src="images/arrow.png" />
                </div>
                <div className="i-box4a">
                <div className="rnd4a">
                    <img src="images/myapp4.png" width="50"/>

                    </div>
                    <div className="alljb4a">Offer Recieved
                    <div className="alljb-val4a">70</div>
                    </div>
                    <img src="images/arrow.png" />
                </div>
            </div>
        </div>

    );
}
