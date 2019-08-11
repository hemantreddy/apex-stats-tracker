import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';

class Search extends Component {
    constructor(){
        super();
        this.state = {
            platform : '',
            gamertag : '',
        }
    }

    componentDidMount() {
        document.body.className = "body-bg-image"
    }
    onChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    } 

    onSubmit = (event) => {
        event.preventDefault();
        if(!this.state.gamertag) {
            console.log("please enter a gamertag");
        } else {
            event.preventDefault();
            this.props.history.push(`/profile/${this.state.platform}/${this.state.gamertag}`);
        }

    }
    
    render() {
        return (
             <section className = "search">
            <form onSubmit = {this.onSubmit}>
                <div className = "form-group">
                    <label for = "platform">Platform</label>
                    <select value = {this.state.platform} name ="platform" id = "platform" onChange={this.onChange}>
                        <option value ="select">Select</option>
                        <option value ="psn">Playstation</option>
                        <option value ="xbl">Xbox</option>
                        <option value ="Origin">Origin</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="gamertag">GamerTag</label>
                    <input 
                        onChange={this.onChange}
                        value = {this.state.gamertag}
                        id="gamertag" 
                        type="text" 
                        name="gamertag" 
                        placeholder="Origin ID, Xbox live, PSN ID, etc"
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Submit" className="btn"/>
                </div>
            </form>
        </section>
        )
    }
}

export default withRouter(Search);
