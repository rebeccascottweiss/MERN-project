import React, { Component } from 'react';

import FacebookLoginBtn from 'react-facebook-login';

import { navigate } from "@reach/router"; 

export default class LoginFacebook extends Component {
    state = {
        auth: false,
        name: "",
        picture: ""
    }

    componentClicked = () => {
        console.log('facebook button clicked');
    }

    responseFacebook = (response) => {
        console.log(response);
        if(response.status !== "unknown")
        this.setState({
            auth: true,
            name:response.name,
            picture: response.picture.data.url
        })
    }

    loggedOut = (response) => {
        console.log(response);
        this.setState({
            auth: false,
        })
    }

    home = (response) => {
        navigate("/");
        }
    

    render(){
        let facebookData;
        this.state.auth ? 
            facebookData = (
                <div className="facebook">
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2> Welcome {this.state.name}</h2>
                    <button className="logOutButton" onClick={this.loggedOut}>log out</button>
                    <button className="homeButton"onClick={this.home}>home</button>

                </div>
            ) :
            facebookData = (
                    <div className="facebook1">
                    <FacebookLoginBtn
                    appId="2434161246889439"
                    autoLoad={true}
                    fields="name,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                    />
                    </div>
            );

        return(
            <>
           
            {facebookData}
           
            </>
        );
    }
}