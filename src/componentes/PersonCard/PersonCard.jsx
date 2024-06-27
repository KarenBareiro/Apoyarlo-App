import { Component } from "react";

class PersonCard extends Component{
    constructor(props){
        super(props);
    }
    render = () =>{
        return(
            <>
            <h2>{this.props.name}</h2>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={this.props.increaseAge}>Birthday button for {this.props.buttonName}</button>
            </> 
        )
    }
}

export default PersonCard;