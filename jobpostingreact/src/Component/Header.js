import React, { useState, useEffect, useContext } from "react";
import DataContext from "../Context/DataContext"
import { useNavigate } from "react-router-dom";
import Axios from "axios"
import {

        Link

} from "react-router-dom";
import "./header.css"

export default function App() {
        let ctx = useContext(DataContext);
        const [hover, setHover] = useState(false);
        useEffect(() => {
                const fetchData = async () => {


                        let sec3 = document.querySelector(".sec3")

                        sec3.addEventListener("mouseenter", () => {
                                //change context
                                setHover(true)
                        })
                        sec3.addEventListener("mouseleave", () => {
                                //change context
                                setHover(false)
                        })
                        let hvrele = document.querySelector(".hvr")

                        hvrele.addEventListener("mouseenter", () => {
                                //change context
                                setHover(true)
                        })
                        hvrele.addEventListener("mouseleave", () => {
                                //change context
                                setHover(false)
                        })

                }

                fetchData()
        }, [])

        function imgenter(e) {
                let sec3 = document.querySelector(".cnt-img")
                sec3.style.border="1px solid white"
        }

        function imgleave(e) {
                let sec3 = document.querySelector(".cnt-img")
                sec3.style.border="none"
        }
        return (
                <div className="header">
                        <div className="container_header">
                                <div className="sec1">
                                        <div >
                                                <img src="images/logo.png" />
                                        </div>
                                </div>
                                <div className="sec2">
                                        <div className="ind-dash">
                                                <Link to="/dashboard"><div> Dashboard</div></Link>
                                        </div>
                                        <div className="ind-p">
                                                <div> Application Profile</div>
                                        </div>
                                        <div className="ind-aj">
                                                <div> Applied Jobs</div>
                                        </div>
                                        <div className="ind-act">
                                                <div> Activity</div>
                                        </div>
                                        <div className="ind-ja">
                                                <div> Job Agent</div>
                                        </div>
                                </div>
                                <div className="sec3">
<div className="cnt-img">
                                        <img onMouseEnter={imgenter} onMouseLeave={imgleave} clasName="prpic" src={ctx.pic} width="25" /></div>
                                        {hover ? <div className="hvr"><Link to="/updateprofile">updateprofile</Link>
                                                <Link to="/logout">logout</Link></div> : null}
                                </div>
                        </div>
                </div>

        );
}