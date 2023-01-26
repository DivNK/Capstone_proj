import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./search.css"
import Axios from "axios"
import {

    Link

} from "react-router-dom";


export default function App(props) {
    const [value, setValue] = useState('');
    const [srchval, setSrchval] = useState({});
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');
    const navigate = useNavigate();
    

    const handleChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);


        setSrchval({
            ...srchval,
            [e.target.name]: e.target.value
        })


    };
    const handleChange1 = (e) => {
        console.log(e.target.value);
        setValue1(e.target.value);


        setSrchval({
            ...srchval,
            [e.target.name]: e.target.value
        })


    };
    const handleChange2 = (e) => {
        console.log(e.target.value);
        setValue2(e.target.value);


        setSrchval({
            ...srchval,
            [e.target.name]: e.target.value
        })


    };
    const handleChange3 = (e) => {
        console.log(e.target.value);
        setValue3(e.target.value);


        setSrchval({
            ...srchval,
            [e.target.name]: e.target.value
        })


    };
    const handleChange4 = (e) => {
        console.log(e.target.value);
        setValue4(e.target.value);


        setSrchval({
            ...srchval,
            [e.target.name]: e.target.value
        })


    };
    const fetchsrchdata =()=>{
        //do a lookup save job in context 
        navigate('/snapshot')


    }

    console.log(value);
    console.log(srchval);
    console.log(props);
    return (<>
        <div className="srch">
            <div className="bck-cont">
            <div className="pg-title">{props.str}</div>
            {props.str=="All Jobs"?null:<Link to={-1}>

                                <div className="bck"><img src="images/bck.png" /><p>Back to search results</p></div>

                            </Link>}
                            </div>
            <div className="srch-in">

                <form className="frmsrch">

                    <input className="frmin" type="text" placeholder="Title,Client,Location" style={{ fontSize: 15 }}></input>
                    <button className="srchbutton" onClick={fetchsrchdata}>Search</button>
                </form>

            </div>
        </div>
        <div className="sub-main">
            <div className="subcontainer">
                <div className="subin" >


                    <select className="ardsub" name="domain" value={value} onChange={handleChange}>

                        <option value="all">All Jobs</option>

                        <option value="java">JAVA</option>

                        <option value="react">React</option>

                    </select>


                </div>
                <div className="subin">
                    <select className="ardsub" name="industry" value={value1} onChange={handleChange1}>

                        <option value="all">All</option>

                        <option value="bank">Banking</option>

                        <option value="it">IT</option>

                    </select>

                </div>
                <div className="subin">
                    <select className="ardsub" name="location" value={value2} onChange={handleChange2}>

                        <option value="all">All</option>

                        <option value="bangalore">Bangalore</option>

                        <option value="mumbai">Mumbai</option>

                    </select>
                </div>
                <div className="subin" >
                    <select className="ardsub" name="type" value={value3} onChange={handleChange3}>

                        <option value="all">All</option>

                        <option value="pt">Part Time</option>

                        <option value="ft">Full Time</option>

                    </select>
                </div>
                <div className="subin">
                    <select className="ardsub" name="pdt" value={value4} onChange={handleChange4}>

                        <option value="all">All</option>

                        <option value="w30">Last 30 days</option>

                        <option value="w90">Last 90 days</option>

                    </select>
                </div>
            </div>
        </div></>
    );
}