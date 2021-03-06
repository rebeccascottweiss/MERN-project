import React, { useEffect, useState } from "react"; 
import Tree from "../components/Tree"; 
import Header from "../components/Header"; 
import Stats from "../components/Stats"; 
import axios from "axios"; 
import Snow from "react-snow-effect"; 
const Main = () => {

    const [ children, setChildren ] = useState(null); 

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

    if (children === null){
        return "Loading..."
    }
    return(
    <div style={{backgroundColor:"rgb(249,226,182)"}}>
        <Header />
        <Snow />
        <Stats children={ children }/>
        <Tree children={ children }/>
    </div>
    )
}



export default Main; 