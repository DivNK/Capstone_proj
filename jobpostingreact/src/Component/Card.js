import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './card.css';
import { useNavigate } from 'react-router-dom';


export default function Card({ jobdata, app }) {
    console.log(jobdata);
    console.log(app);
    let [data, setData] = useState([]);
    let [res, setRes] = useState(app);
    const navigate = useNavigate();
    console.log(res);
         async function handleClick()  {
        let str = `applyBtn gen${jobdata.id}`
         let appbutt = document.querySelectorAll(".applyBtn")
        console.log("-----Element-------");
        console.log(appbutt);
        
                //  console.log(e.target.className)
                 console.log(str)
                //  console.log(e.target.className == str);
               
                    try {
                        var today = new Date(),

                            newDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                        console.log(newDate);
                        let jobdetail = { "jobid": jobdata.id, "jobcode": jobdata.jobcode, "jobtitle": jobdata.jobtitle, "location": jobdata.location, "posteddate": jobdata.posteddate, "applieddate": newDate }

                        let res = await Axios.post("/apply",jobdetail);
                        console.log("-----data-------");
                        console.log(data);
                        setData(res.data)
                        console.log("--------data----");
                        
                        console.log(res.data);
                       if(res.data=="Data Added")
                       {
                        setRes(false)
                       }



                    } catch (e) {

                        console.log(e);
                    }

                
               

           
         }

   
    
         console.log(data);
         console.log(res);

    return (

        <div className='cont-card'>
            <div className='card'>
                <div className='headerText'>
                    <text className='Titletext'>{jobdata.jobCode} {jobdata.jobtitle}</text>

                    {res ? <button className="applyBtn" onClick={handleClick}>Apply</button> : <div className='applied'><i className="fa fa-check"></i>Applied</div>}
                </div>
                <div className='line2'>
                    <div className='jobLocation'><img src='/images/location_on.png'></img><text>{jobdata.location}</text></div>
                    <div className='jobType'><img src='/images/briefcase-outline.png'></img><text>{jobdata.jobtype}</text></div>
                    <div className='jobSalary'><img src='/images/money.png'></img><text>{jobdata.salary} pa</text></div>
                    <div className='jobCategory'><img src='/images/building.png'></img><text>{jobdata.companyname.toUpperCase()}</text></div>
                </div>
                <div className='jobDescription'>
                    <p>
                        {jobdata.jobdescription}
                    </p>
                </div>
            </div>
        </div>


    );
}