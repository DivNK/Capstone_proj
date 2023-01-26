import React,{useState} from "react";
import './register.css';
import Axios from 'axios';
export default function Register(){
    let [userdata,setUserdata]=useState({});
    const handlechange = (e) =>{
        setUserdata({
            ...userdata,
            [e.target.name]:e.target.value

        })
        console.log("^^^^^");
        console.log(userdata);
    }
       // const registerdata=()=> {

           // console.log("in registration function");
            async function registerdata() {
                console.log("********** in registerdata function");
                console.log(userdata);
                try {
                let res = await Axios.post("/user", userdata);
                console.log(res.headers);
                console.log(res.data);
                } catch (e) {
                console.log(e);
    
               }
    
                
            }
           
    
    return (
        <div className="registerMe">
            
            <h1>USER REGISTRATION</h1>
                
                <table>
                    <tbody>
                <tr>
                        <td className="tableLabel"><label>Email:</label></td>
                        <td className="tableInput"><input type="text"  name="email"  onChange={handlechange} /></td>
                    </tr>
                    <tr>
                        <td className="tableLabel"><label>Password: </label></td>
                        <td className="tableInput"><input type="password"  name="pwd" onChange={handlechange} /></td>
                    </tr>
                    {/* <tr>
                        <td className="tableLabel"><label>User type: </label></td>
                        <td className="tableInput"><input type="text"  name="usertype" value="student" /></td>
                    </tr> */}
                    </tbody>
                    </table><br/>
            <button onClick={registerdata}>REGISTER</button>
        </div>
    );
}