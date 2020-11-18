import React, { useEffect, useState } from "react"; 
import Tree from "../components/Tree"; 
import Header from "../components/Header"; 
import axios from "axios"; 

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
    <div>
        <Header />
        <div>
            <Tree children={ children }/>
        </div>
    </div>
    )
}

export default Main; 