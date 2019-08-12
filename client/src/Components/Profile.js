import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Profile.css'

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            loading : false,
            error : null,
            profileData : null
        }
    }
UNSAFE_componentWillMount() {
    this.setState({
        loading : true
    });
}

componentDidMount() {
    document.body.className = "body-bg-no-image";
    const {platform, gamertag} = this.props.match.params
        console.log(platform, gamertag)
        axios.get(`/api/v1/profile/${platform}/${gamertag}`)
            .then(res => {
               this.setState({
                   loading: false,
                   profileData: res.data.data
               }).then(()=>console.log(this.state.profileData))
            })
            .then(() => console.log(this.state.profileData))
            .catch(error => {
            this.setState({
                loading: false,
                error,
                }) 
            })

    }
    render() {
        const {loading, profileData, error} = this.state;
        if(loading) {
            return <h1>Loading...</h1>
        }
        if(error) {
            return <Link to = "/">Go back</Link>
        }
        return (
            <div className="container">
                <h1 className="gamertag">
                    <img src={profileData.platformInfo.avatarUrl} className="platform-avatar" alt="avatar"/>
                    {profileData.platformInfo.platformUserId}
                </h1>
                <div className="grid">
                    <div>
                        <img src={profileData.segments[1].metadata.imageUrl} alt="legendImage"/>
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h4>Selected Legend</h4>
                                <p>{profileData.metadata.activeLegendName}</p>
                            </li>
                            {profileData.segments[0].stats.season2Wins
                            ?   <li>
                                    <h4>Season 2 Wins</h4>
                                    <p>
                                        {profileData.segments[0].stats.season2Wins.displayValue}
                                        <span> ({profileData.segments[0].stats.season2Wins.percentile}%)</span>
                                    </p>
                                </li>
                            : null
                            }
                            {profileData.segments[0].stats.level
                            ?   <li>
                                    <h4>Apex Level</h4>
                                    <p>
                                        {profileData.segments[0].stats.level.displayValue}
                                        <span> ({profileData.segments[0].stats.level.percentile}%)</span>
                                    </p>
                                </li>
                            : null
                            }
                            {profileData.segments[0].stats.kills
                            ?   <li>
                                    <h4>Lifetime Kills</h4>
                                    <p>
                                        {profileData.segments[0].stats.kills.displayValue}
                                        <span> ({profileData.segments[0].stats.kills.percentile}%)</span>
                                    </p>
                                </li>
                            : null
                            }
                            {profileData.segments[0].stats.damage
                            ?   <li>
                                    <h4>Damage Done</h4>
                                    <p>
                                        {profileData.segments[0].stats.damage.displayValue}
                                        <span> ({profileData.segments[0].stats.damage.percentile}%)</span>
                                    </p>
                                </li>
                            : null
                            }
                        </ul>
                    </div>
                </div>
                <Link to="/">Go Back</Link>
            </div>
        )
    }
}

export default Profile;
