import React, { useEffect, useState } from "react"; 
import { 
    Button,
    Card, 
    CardContent, 
    CardActionArea
 } from "@material-ui/core"; 
import axios from "axios";
import Header from "../components/Header"; 

const Child = (props) => {
    const [ child, setChild ] = useState(null); 
    useEffect(()=>{
        axios
            .get(`http://localhost:8000/api/children/${props.id}`)
            .then((res)=>{
                setChild(res.data); 
            })
            .catch((err)=>{
                console.error(err); 
            })
    }, [props.id]); 

    if(child === null){
        return "Loading..."
    }

    return (
        <div>
            <Header />
            <div style={ornamentStyle}>
                <h1>
                    { child.firstName} { child.lastName } 
                </h1>
                <div>
                    <Card>
                        <CardContent>
                            <div>
                                <h3>I live in { child.city } and I am { child.age } years old.</h3>
                            </div>
                            <div>
                                <h3>My Wish List:</h3>
                                    { child.items.map((item)=>{
                                        return (
                                            <>
                                            <p>{ item }</p>
                                            <a href={child.wishlist}>My Amazon WishList</a>
                                            {console.log(child.wishlist)}
                                            </>
                                        )
                                    })}
                            </div>
                            <div>
                                <h3>I'm Really Interested In:</h3>
                                    { child.interest.map((interest)=>{
                                        return (
                                            <p>{ interest }</p>
                                        )
                                    })}
                            </div>
                        </CardContent>
                        <CardActionArea>
                            <Button >Buy Me Stuff</Button>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
    )
};

const ornamentStyle = {
    borderRadius: "50%",
    width: "500px",
    height: "500px",
    backgroundColor: "darkred", 
    color: "white",
    margin: "1em auto",
    display:"flex", 
    flexDirection:"column",
    justifyContent:"center",
    alignItems: "center",

}; 

export default Child; 