import React, { useState } from "react";
import './profileupdate.css';


export default function Profileupdate() {
    let [candidatedata, setCandidatedata] = useState({});
    const handlechange = (e) => {
        setCandidatedata({
            ...candidatedata,
            [e.target.name]: e.target.value

        })
        console.log(candidatedata);
    }
    const updatedata = () => {
        console.log("in update data");
        console.log(candidatedata);
        // let res = await Axios.post("http://127.0.0.1:3007/bookdetail", userdata);

    }
    const tohome=()=>{
               console.log("to home page");
    }
    
 return (
        <div className="updateProfileForm">
            <h1>PROFILE UPDATE:</h1>
                <h3>ENTER YOUR COMPLETE DETAILS FOR BETTER REACH</h3>
                <table>
                    <tbody>
                <tr>
                        <td className="tableLabel"><label>First Name:</label></td>
                        <td className="tableInput"><input type="text"  name="fname"  onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Last Name: </label></td>
                        <td className="tableInput"><input type="text"  name="lname" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Email: </label></td>
                        <td className="tableInput"><input type="text"  name="email" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Contact Number: </label></td>
                        <td className="tableInput"><input type="text"  name="phone" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Address: </label></td>
                        <td className="tableInput"><input type="text"  name="address" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>About: </label></td>
                        <td className="tableInput"><input type="text"  name="about" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Current Company: </label></td>
                        <td className="tableInput"><input type="text"  name="currentorg" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Current CTC: </label></td>
                        <td className="tableInput"><input type="number"  name="currentctc" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Experience(in years) </label></td>
                        <td className="tableInput"><input type="string"  name="experience" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Current Role: </label></td>
                        <td className="tableInput"><input type="text"  name="role" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Skills : </label></td>
                        <td className="tableInput"><input type="text"  name="skills" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Expected Salary: </label></td>
                        <td className="tableInput"><input type="text"  name="expectedctc" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Preferred Location: </label></td>
                        <td className="tableInput"><input type="text"  name="location" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Upload CV Link:</label></td>
                        <td className="tableInput"><input type="url" name="cvLink" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Profile Pic Link: </label></td>
                        <td className="tableInput"><input type="url" name="pic" onChange={handlechange} /></td>
                    </tr>
                    </tbody>
                </table>
            <br /><br />
            <button onClick={tohome}>BACK TO HOME</button>
            <button onSubmit={updatedata}>CLICK TO UPDATE</button>
        </div>
    );
}