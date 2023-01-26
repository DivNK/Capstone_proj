import React,{useState} from "react";
import DataContext from "./DataContext";

export default function ContextProvider({children}){
let [email,setEmail]=useState('')
let [pic,setPic]=useState("images/profile.png")
// let [datacard,setDatacard]=useState({})

let[isloggedein,setisloggedIn] =useState(false)

return(
    <DataContext.Provider value={{email,setEmail,pic,setPic,isloggedein,setisloggedIn}}>
        {children}
    </DataContext.Provider>
)

}
