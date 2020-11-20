import React, { useEffect, useState } from "react"; 
import { 
    Card, 
    CardContent, 
    CardActionArea
 } from "@material-ui/core"; 
import axios from "axios";
import Header from "../components/Header"; 
import BuyButton from "../components/BuyButton"; 
import { Spring } from "react-spring/renderprops"; 

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
        return <Header />
    }
    
    function WishList() {
        let wishlist = <a href={child.wishlist} target = "blank">My Amazon WishList</a>;
        if (child.wishlist!==undefined){
            return (
                <p>{wishlist}</p>
            );        
        } else {
            return (null)
        };
    }
    

    return (
        <div>
        <Header />
        <Spring from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 250, duration: 1000 }}>
                {props => (
                    <div style={props}>
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
                                            <WishList/>
                                                { child.items.map((item)=>{
                                                    return (
                                                        <>
                                                        <p>{ item }</p>
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
                                        <BuyButton id = { child._id } route = { child.wishlist }/>
                                    </CardActionArea>
                                </Card>
                            </div>
            </div>
                        </div>
        )}
        </Spring>
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