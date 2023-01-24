import Snapshot from './Snapshot'
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import Myapp from "./Myapp"
import Search from "./Search"
import Subsrch from "./Subsrch"
import Card from "./Card"

export default function App() {
return(<>
<Snapshot></Snapshot>
<Myapp></Myapp>
<Search></Search>
<Subsrch></Subsrch>
<Card></Card>
</>

);
}
