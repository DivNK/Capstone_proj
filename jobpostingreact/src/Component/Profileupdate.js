import React, { useState, useEffect } from "react";
import './profileupdate.css';
import Axios from 'axios';
export default function Profileupdate() {
    
    let [data, setData] = useState([]);
    let [skilloptions, setOptions]= useState([]);
    var myfinalstring;
    let [selectedOption, setSelectedOption] = useState("");
    useEffect(() => {
        const fetchData = async () => {
          let res = await Axios.get("/candidateprofile");
          setData(res.data);
          console.log(res.data);
          let result = await Axios.get("/skilltable");
          setOptions(result.data);
          setData({
                        ... res.data,
                         skills: ""
                     }) 
          console.log(result.data);
        }
        fetchData();
      }, [])
    
    const handlechange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value

        })
        console.log(data);
    }

     const handleskillchange = (event) => {
       myfinalstring  =  event.target.value;
       if ( selectedOption.includes(myfinalstring)== false) 
       { 
        setData({
            ...data,
             skills: data.skills!=""?data.skills+","+myfinalstring:myfinalstring
         })
        setSelectedOption(selectedOption+myfinalstring+",");
     }
        console.log(selectedOption);
     }
        function updatedata() {
       
      console.log("********** in updatedata function");
      console.log(selectedOption);
      setSelectedOption(selectedOption.substring(0, selectedOption.length - 1));

    
     console.log(data);
     finalupdate();
        }

     async function finalupdate() {
         try {
        let res = await Axios.put("/candidateprofile/1", data);
        
         console.log(res.headers);
         console.log(res.data);
         } catch (e) {
         console.log(e);

        }
    }
     return (
        <>
         <h1>PROFILE UPDATE:</h1>
                <h3>ENTER YOUR COMPLETE DETAILS FOR BETTER REACH</h3>
                
                <div className="updateProfileForm">
           
                <table>
                    <tbody>
                <tr>
                        <td className="tableLabel"><label>First Name:</label></td>
                        <td className="tableInput"><input  type="text"  name="firstName" value={data.firstName}  onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Last Name: </label></td>
                        <td className="tableInput"><input type="text"  name="lastName" value={data.lastName}  onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Email: </label></td>
                        <td className="tableInput"><input disabled type="text"  name="email" value={data.email}  /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Contact Number: </label></td>
                        <td className="tableInput"><input type="text"  name="contact" value={data.contact} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Address: </label></td>
                        <td className="tableInput"><input type="text"  name="address" value={data.address} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>About: </label></td>
                        <td className="tableInput"><input type="text"  name="about" value={data.about} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Current Company: </label></td>
                        <td className="tableInput"><input type="text"  name="currentCompany" value={data.currentCompany} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Current CTC: </label></td>
                        <td className="tableInput"><input type="number"  name="ctc" value={data.ctc} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Experience(in years) </label></td>
                        <td className="tableInput"><input type="number"  name="experience" value={data.experience} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Current Role: </label></td>
                        <td className="tableInput"><input type="text"  name="currentRole" value={data.currentRole} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label >Skill Set: </label></td>
                        <select name="skills" onChange={handleskillchange}
                    size="8" multiple >
                    {skilloptions.map((ele) => (
                    <option >{ele.skillname}</option>
                    
                     ))} 
                     </select>
                        </tr>
                    
                    <tr>
                    <td className="tableLabel"><label >SELECTED SKILLS ARE:</label></td>
                     <td className="tableLabel"><label >{selectedOption}</label></td>
                    </tr>    
                     <tr>
                        <td className="tableLabel"><label>Expected Salary: </label></td>
                        <td className="tableInput"><input type="number"  name="expectedSalary" value={data.expectedSalary} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Preferred Location: </label></td>
                        <td className="tableInput"><input type="text"  name="preferredLocation" value={data.preferredLocation} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Upload CV Link:</label></td>
                        <td className="tableInput"><input type="text" name="resumeLink" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Profile Pic Link: </label></td>
                        <td className="tableInput"><input type="text" name="profilePic" onChange={handlechange} /></td>
                    </tr>
                    </tbody>
                </table>
            <br /><br />
           
            <button onClick={updatedata}>CLICK TO UPDATE</button>
        </div>
       
      </>
    );
}