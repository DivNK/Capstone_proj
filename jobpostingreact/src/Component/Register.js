import React,{useState} from "react";
import './register.css';

export default function Register(){
    let [userdata,setUserdata]=useState({});
    const handlechange = (e) =>{
        setUserdata({
            ...userdata,
            [e.target.name]:e.target.value

        })
        console.log(userdata)
    }
        const registerdata=()=> {

            console.log("in registration function");
            //let res = await Axios.post("http://127.0.0.1:3007/bookdetail", userdata);
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
                    </tbody>
                    </table><br/>
            <button onClick={registerdata}>REGISTER</button>
        </div>
    );
}