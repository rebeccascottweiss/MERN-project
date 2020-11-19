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
        <div style ={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={present}>
                <p style={display}>
                    {children.length}
                </p>
                <p style={display}>
                    Need Help
                </p>
            </div>
            <div style={present}>
                <p style={display}>
                    {kid.length}
                </p>
                <p style={display}>
                    Have Been Helped
                </p>
            </div>
            <div style={present}>
                <p style={display}>
                    ${total}
                </p>
                <p style={display}>
                    Total Donation
                </p>
                
            </div>
        </div>

    )
}

const present = {
    height: "200px",
    width: "200px",
    fontSize: "1.3em",
    fontFamily:"'Mountains of Christmas', cursive",
    fontWeight: "500",
    color: "#f8f5f0",
    margin: "1rem",
    textAlign: "center",
    padding: "4rem 0rem 0rem 2rem",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: `url(${Present_PNG})`,
    backgroundSize: "contain",
}

const display = {
    transform:"rotate(30deg)", 
    lineHeight: ".5em",
    marginTop: ".5em",
}
export default Stats;