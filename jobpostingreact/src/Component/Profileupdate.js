import React, { useState } from "react";
import './profileupdate.css';

export default function Profileupdate() {
    let [userdata, setUserdata] = useState({});
    const handlechange = (e) => {
        setUserdata({
            ...userdata,
            [e.target.name]: e.target.value

        })
    }
    const updatedata = () => {

        // let res = await Axios.post("http://127.0.0.1:3007/bookdetail", userdata);

    }
    const fileChange = (event) => {

        var file = document.querySelector('input[type=file]').files[0];
        let data1 = new FormData();
        data1.append('file', file);
        setUserdata(data1);
        console.log("data1" + data1);
        console.log("data" + event.target.result);
        console.log("data" + userdata);
    }

    return (
        <div className="updateProfileForm">
            <h1>PROFILE UPDATE:</h1>
                <h3>ENTER YOUR COMPLETE DETAILS FOR BETTER REACH</h3>
                <table>
                    <tr>
                        <td><label>Your Phone Number: </label></td>
                        <td><input type="text"  name="phone" onChange={handlechange} /></td><br/><br/>
                    </tr>
                    <tr>
                        <td><label>Company Name: </label></td>
                        <td><input type="text"  name="currentorg" onChange={handlechange} /></td><br/><br/>
                    </tr>
                    <tr>
                        <td><label>Your CTC: </label></td>
                        <td><input type="text"  name="currentctc" onChange={handlechange} /></td><br/><br/>
                    </tr>
                    <tr>
                        <td><label>Your Role: </label></td>
                        <td><input type="text"  name="role" onChange={handlechange} /></td><br/><br/>
                    </tr>
                    <tr>
                        <td><label>Skills : </label></td>
                        <td><input type="text"  name="skills" onChange={handlechange} /></td><br/><br/>
                    </tr>
                    <tr>
                        <td><label>Upload CV(pdf): </label></td>
                        <td><input type="file" accept=".pdf" onChange={fileChange} /></td><br/><br/>
                    </tr>
                    <tr>
                        <td><label>Profile Pic: </label></td>
                        <td><input type="file" accept=".jpeg,.jpg,.png" onChange={fileChange} /></td><br/><br/>
                    </tr>
                </table>
            <br /><br />
            <button onSubmit={updatedata}>CLICK TO UPDATE</button>
        </div>
    );
}