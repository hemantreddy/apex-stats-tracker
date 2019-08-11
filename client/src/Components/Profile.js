import React, { Component } from 'react'

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            loading : false,
            error : null,
            profileData : null
        }
    }
    async componentWillMount() {
        this.setState({
            loading : true
        });   
    }
    componentDidMount() {
        document.body.className = "body-bg-no-image";
    }
    render() {
        return (
            <div>
                Profile
            </div>
        )
    }
}

export default Profile;
