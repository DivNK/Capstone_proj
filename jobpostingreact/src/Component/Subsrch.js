import React, { useEffect, useState } from "react";

import "./subsrch.css"
export default function App() {
    const [value, setValue] = useState('');
    const [srchval, setSrchval] = useState({});
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('');

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
    console.log(value);
    console.log(srchval);
    return (
        <>
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
            </div>
        </>

    )

}