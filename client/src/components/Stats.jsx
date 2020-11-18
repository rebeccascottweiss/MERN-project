import React, { useEffect, useState } from "react";
import axios from "axios";

const Stats = () => {
    const [ children, setChildren ] = useState(null); 
    const [ kid, setKid ] = useState(null); 

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

    if (children === null){
        return "Loading..."
    }
    if (kid === null){
        return "Loading..."
    }

    return(
        <div>
            <h2>
                {children.length} Need Help
            </h2>
            <h2>
                {kid.length} Have Been Helped
            </h2>
            <h2>
                Amount has been Donated (Place Holder)
            </h2>
        </div>

    )
}

export default Stats;