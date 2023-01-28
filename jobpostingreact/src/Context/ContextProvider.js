import React,{useState} from "react";
import DataContext from "./DataContext";

export default function ContextProvider({children}){
let [email,setEmail]=useState('')
let [pic,setPic]=useState("images/profile.png")
let [search,setSearch]=useState([])
let [clkcrch,setClkcrch]=useState(false)

// let [datacard,setDatacard]=useState({})

let[isloggedein,setisloggedIn] =useState(false)

return(
    <DataContext.Provider value={{email,setEmail,pic,setPic,isloggedein,setisloggedIn,search,setSearch,clkcrch,setClkcrch}}>
        {children}
    </DataContext.Provider>
)

}
