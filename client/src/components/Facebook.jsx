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
                <div>
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2> Welcome {this.state.name}</h2>
                    <button onClick={this.loggedOut}>log out</button>
                    <button onClick={this.home}>home</button>

                </div>
            ) :
            facebookData = (

                    <FacebookLoginBtn
                    appId="2434161246889439"
                    autoLoad={true}
                    fields="name,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}/>

            );

        return(
            <>
            {facebookData}
            </>
        );
    }
}