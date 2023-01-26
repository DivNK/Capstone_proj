import React, { useState } from 'react';
import Axios from 'axios';
import './card.css';
import {useLocation} from 'react-router-dom';

export default function Card({jobdata}) {
    

    return (

            <div className='cont-card'>
            <div className='card'>
                <div className='headerText'>
                <text className='Titletext'>{jobdata.jobCode} {jobdata.jobtitle}</text>
                <button className='applyBtn'>Apply</button>
                </div>
                <div className='line2'>
                    <div className='jobLocation'><img src='/images/location_on.png'></img><text>{jobdata.location}</text></div>
                    <div className='jobType'><img src='/images/briefcase-outline.png'></img><text>{jobdata.jobtype}</text></div>
                    <div className='jobSalary'><img src='/images/money.png'></img><text>{jobdata.salary}</text></div>
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