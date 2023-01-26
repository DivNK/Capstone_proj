import React, { useState, useEffect } from "react";
import './profileupdate.css';
import Select from 'react-select';
import Axios from 'axios';


export default function Profileupdate() {
    
    let [data, setData] = useState([]);
   
    const options = [
        { value:'JAVA', label: 'JAVA' },
        { value:'ruby', label: 'Ruby' },
        {  value:'ror',label: 'Rails' },
        { value:'python', label: 'python' },
        { value:'C', label: 'c' },
       ];
       useEffect(() => {
        const fetchData = async () => {
          let res = await Axios.get("/candidateprofile");
          setData(res.data);
          console.log(res.data);
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

     const [selectedOption, setSelectedOption] = useState("");
     var myfinalstring="";
     var i=0;
     var handleskillchange = (selectedOption) => {
        let mystr;
       setSelectedOption(selectedOption.value);
       mystr=selectedOption[i].label;
       console.log(selectedOption[i].label);
       myfinalstring +=  mystr + ", ";
       i=i+1;
       console.log(myfinalstring);  
        setData({
          ...data,
          skills: myfinalstring

      }) 
       }
     async function updatedata() {
      console.log("********** in updatedata function");
    
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
                        <td className="tableInput"><input  type="text"  name="fname" value={data.fname}  onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Last Name: </label></td>
                        <td className="tableInput"><input type="text"  name="lname" value={data.lname}  onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Email: </label></td>
                        <td className="tableInput"><input disabled type="text"  name="email" value={data.email}  /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Contact Number: </label></td>
                        <td className="tableInput"><input type="text"  name="phone" value={data.phone} onChange={handlechange} /></td>
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
                        <td className="tableInput"><input type="text"  name="currentorg" value={data.currentorg} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Current CTC: </label></td>
                        <td className="tableInput"><input type="text"  name="currentctc" value={data.currentctc} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Experience(in years) </label></td>
                        <td className="tableInput"><input type="text"  name="experience" value={data.experience} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Current Role: </label></td>
                        <td className="tableInput"><input type="text"  name="role" value={data.role} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label >Skill Set: </label></td>
                         <Select 
                        isMulti  onChange={handleskillchange}
                        options={options} value={selectedOption}  closeMenuOnSelect={true}
                        /> 
                        </tr>
                    
                    <tr>
                        <td className="tableLabel"><label>Expected Salary: </label></td>
                        <td className="tableInput"><input type="text"  name="expectedctc" value={data.expectedctc} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Preferred Location: </label></td>
                        <td className="tableInput"><input type="text"  name="location" value={data.location} onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Upload CV Link:</label></td>
                        <td className="tableInput"><input type="text" name="cvlink" onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Profile Pic Link: </label></td>
                        <td className="tableInput"><input type="text" name="pic" onChange={handlechange} /></td>
                    </tr>
                    </tbody>
                </table>
            <br /><br />
           
            <button onClick={updatedata}>CLICK TO UPDATE</button>
        </div>
       
      </>
    );
}
