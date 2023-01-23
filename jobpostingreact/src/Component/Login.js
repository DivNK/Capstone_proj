import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import {
 
    Link
      
      } from "react-router-dom";

    
export default function App()
{
    // Axios.defaults.withCredentials = true;

    let[login,setLogin]=useState({});
    const [sessionId, setSessionId] = useState(null);
    const navigate = useNavigate();
    
    const handleChange=(e)=>
    {
        setLogin({
            ...login,
            [e.target.name]:e.target.value
        })
        console.log("**********");
        console.log(login);
    }
    async function sendData() {

        // let qr=document.querySelector("input")
        // console.log(res.data);
        // console.log(qr.innerHTML);
        console.log("Enter Send data");
        console.log("**********");
        console.log(login);
        // let res = await Axios.get("http://127.0.0.1:3001/Login", { params: login },{withCredentials: true})
       try{

       let res = await Axios.post("http://127.0.0.1:3001/login", login)

        console.log(res.headers);
        // setSessionId(res.data.session_id);
    //   console.log("Session ID: ", sessionId);
        // if(res.data.includes("Successfull"))
        // {
        //     navigate('/list')
        // }
    }catch(e) 
    {
        console.log(e);
  
    }
       
    }

    // const makeApiRequest = async () => {
    //     try {
    //       const response = await Axios.get("http://127.0.0.1:3001/book", {
    //         headers: {
    //           "": sessionId
    //         }
    //       });
    //       console.log(response);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    return(


<div className='container'>

       
        {/* <table className="login" >
            <tr>
                <td >
                <label >Email</label></td>
                <td >
                    <input type="email" name="userEmail" onChange={handleChange}/>
                </td>
            </tr>
            <tr>
                <td >
                <label >Password </label></td>
                <td >
                    <input type="text" name="password" onChange={handleChange}/>
                </td>
            </tr>
        </table> */}
   
        <div className='cont-det'>
        
       <div className='cont-in'>
       <legend >Login Details</legend>
       <br></br>
       <div className='vals'><p> Email </p><input type="email" name="email" onChange={handleChange}/></div>
       <div className='vals'> <p>Password</p><input type="text" name="password" onChange={handleChange}/></div>
       <br></br>
       <button onClick={sendData}>Submit</button>   </div>
       </div>
      </div>
     

    );
}