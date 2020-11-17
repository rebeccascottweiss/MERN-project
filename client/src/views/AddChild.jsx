import React, { useState } from "react";
import { Link } from "@reach/router"; 
// import axios from "axios"; 
import ChildForm2 from "../components/ChildForm2"; 

const New = (props) => {
    const [child, setChild] = useState({}); 
    const [errors, setErrors] = useState([]); 

    const createChild = (newChild) =>{
        console.log(`We are adding this child to the database: ${newChild}`)
    //   axios
    //         .post("http://localhost:8000/api/authors/new", newChild)
    //         .then((res)=>{
    //             console.log(res.data); 
    //             navigate("/"); 
    //         })
    //         .catch((err)=>{
    //           const errorResponse = err.response.data.errors; // Get the errors from err.response.data
    //           const errorArr = []; // Define a temp error array to push the messages in
    //           for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
    //               errorArr.push(errorResponse[key].message)
    //           }
    //           // Set Errors
    //           setErrors(errorArr);
    //         });
    }

  return <div>
    <Link to="/">Home</Link>
    <ChildForm2 
        onSubmitProp={ createChild }
        child = { child }
        setChild = { setChild }    
    />
  </div>;
};

export default New;
