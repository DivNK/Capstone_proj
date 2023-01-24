import React, { useState } from 'react';
import Axios from 'axios';
import './card.css';

export default function Card() {
    return (

            <div className='cont-card'>
            <div className='card'>
                <div className='headerText'>
                <text className='Titletext'>JPC - 1692 Developer</text>
                <button className='applyBtn'>Apply</button>
                </div>
                <div className='line2'>
                    <div className='jobLocation'><img src='/images/location_on.png'></img><text>Mumbai, Maharastra</text></div>
                    <div className='jobType'><img src='/images/briefcase-outline.png'></img><text>Full Time</text></div>
                    <div className='jobSalary'><img src='/images/money.png'></img><text>150-180</text></div>
                    <div className='jobCategory'><img src='/images/building.png'></img><text>CIPEL</text></div>
                </div>
                <div className='jobDescription'>
                    <p>
                    beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis s
                    </p>
                </div>
            </div>
            <div className='card'>
                <div className='headerText'>
                <text className='Titletext'>JPC - 1692 Developer</text>
                <button className='applyBtn'>Apply</button>
                </div>
                <div className='line2'>
                    <div className='jobLocation'><img src='/images/location_on.png'></img><text>Mumbai, Maharastra</text></div>
                    <div className='jobType'><img src='/images/briefcase-outline.png'></img><text>Full Time</text></div>
                    <div className='jobSalary'><img src='/images/money.png'></img><text>150-180</text></div>
                    <div className='jobCategory'><img src='/images/building.png'></img><text>CIPEL</text></div>
                </div>
                <div className='jobDescription'>
                    <p>
                    beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis s
                    </p>
                </div>
            </div>
        </div>


    );
}