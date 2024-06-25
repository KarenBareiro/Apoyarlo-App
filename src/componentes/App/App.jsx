import { Component } from "react"
import PersonCard from "../PersonCard/PersonCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        name: "Doe, Jane",
        age: 24,
        hairColor: "Black",
      },
      {
        name: "Smith, John",
        age: 88,
        hairColor: "Brown",
      },
      {
        name: "Fillmore, Millard",
        age: 50,
        hairColor: "Brown",
      },
      {
        name: "Smith, Maria",
        age: 62,
        hairColor: "Brown",
      }]

    }

  }

  render = () => {
    return (
      <>
        {this.state.list.map((newlist)=>{
          return(<PersonCard name= {newlist.name} age={newlist.age} hairColor={newlist.hairColor}/>)
          })}
      </>
    )
  }
}

export default App
