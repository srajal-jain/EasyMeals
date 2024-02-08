import React from "react";

class UserClass extends React.Component{

    constructor(x){
        super(x);
        console.log(x);

        this.state = {};
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/srajal-jain");
        const json = data.json;
        console.log(json);
    }

    render(){
        const {name, location} = this.props;

        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h4>Location: {location}</h4>
                <h4>Contact: abc@gmail.com</h4>
            </div>
        )
    }
}

export default UserClass