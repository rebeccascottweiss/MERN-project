import React, { useEffect, useState } from "react";
import axios from "axios";
import Present_PNG from "../images/Present.png"; 

const Stats = () => {
    const [ children, setChildren ] = useState(null); 
    const [ kid, setKid ] = useState(null);
    const [ total, setTotal ] = useState(null);

    useEffect(()=>{
        axios
            .get("http://localhost:8000/api/children")
            .then((res)=>{
                const filteredChildren = res.data.filter(
                    (child) => {
                        return child.isHelped === false; 
                    }
                ); 
                console.log(filteredChildren); 
                setChildren(filteredChildren); 
            })
            .catch((err)=>{
                console.error(err); 
            })
    },[]);

    useEffect(()=>{
        axios
            .get("http://localhost:8000/api/children")
            .then((res)=>{
                const filteredKid = res.data.filter(
                    (child) => {
                        return child.isHelped === true; 
                    }
                ); 
                console.log(filteredKid); 
                setKid(filteredKid); 
            })
            .catch((err)=>{
                console.error(err); 
            })
    },[]);

    useEffect(()=>{
        axios
            .get("http://localhost:8000/api/donation")
            .then((res)=>{
                const cat = res.data
                var donTotal = cat.reduce(function(prev, cur){
                    return prev + cur.donation;
                }, 0).toFixed(2)
                console.log(donTotal);
                setTotal(donTotal);
            })
            .catch((err)=>{
                console.error(err); 
            })
    },[]);

    const presentStyle = {
        width: "250px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        left:"100px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${Present_PNG})`,
        position:"relative",
    }

    if (children === null){
        return "Loading..."
    }
    if (kid === null){
        return "Loading..."
    }
    if (total === null){
        return "Loading..."
    }

    return(
        <div name="presents" style ={{
            color:"#ffffff",
            fontFamily: "'Mountains of Christmas', cursive",
            display: "inline-block",
            marginRight: "150px",
            marginBottom: "50px",
            marginTop: "1em",
            verticalAlign:"top"
        }}>
            <div name="Kids Nominated" style={presentStyle}>
                <h3 style={{
                    height: "200px",
                    width: "150px",
                    marginTop: "55px",
                    marginRight: "55px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    {children.length} {children.length ===1? 'Child Needs Help' : "Children Need Help"}
                </h3>
            </div>
            <div name="Kids Helped" style={presentStyle}>
                <h3 style={{
                    height: "200px",
                    width: "150px",
                    marginTop: "55px",
                    marginRight: "55px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    {kid.length} {kid.length ===1? 'Child Has Been Helped' : "Children Have Been Helped"}
                </h3>
            </div>
            <div name="Donation" style={presentStyle}>
                <h3 style={{
                    height: "200px",
                    width: "150px",
                    marginTop: "55px",
                    marginRight: "55px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    ${total} Has Been Donated
                </h3>
            </div>
        </div>

    )
}


export default Stats;