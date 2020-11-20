import React, { useState } from "react";
import axios from "axios"; 
import ChildForm2 from "../components/ChildForm2"; 
import Header from "../components/Header"; 
import { navigate } from "@reach/router"; 
import { Spring } from "react-spring/renderprops"; 

const New = (props) => {
    const [child, setChild] = useState({}); 
    const [errors, setErrors] = useState({}); 

    const createChild = (newChild) =>{
        axios
              .post("http://localhost:8000/api/children", newChild)
              .then((res)=>{
                  console.log(res.data); 
                  navigate("/"); 
              })
              .catch((err)=>{
                // console.log(err.response.data.errors.age.message); 
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                // const errorArr = []; // Define a temp error array to push the messages in
                // for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    // errorArr.push(errorResponse[key].message)
                // }
                // Set Errors
                setErrors(errorResponse);
              }
              );
    }

  return <div>
    <Header />
    <Spring from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 500, duration: 1000 }} >
        {props => (
          <div style={props}>
            <ChildForm2 
                onSubmitProp={ createChild }
                child = { child }
                setChild = { setChild } 
                errors = { errors }   
            />
          </div>
    )}
    </Spring>
  </div>;
};

export default New;
