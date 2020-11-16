import React, { useState } from "react";
import { Link } from "@reach/router"; 
// import axios from "axios"; 
import ChildForm from "../components/ChildForm"; 

const New = (props) => {
    const [name, setName] = useState(""); 
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
    <ChildForm onSubmitProp = { createChild } name={ name } setName={ setName } errors={ errors } setErrors={ setErrors } />
  </div>;
};

export default New;
