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
        buttonName: "Jane",
      },
      {
        name: "Smith, John",
        age: 88,
        hairColor: "Brown",
        buttonName: "John",
      },
      {
        name: "Fillmore, Millard",
        age: 50,
        hairColor: "Brown",
        buttonName: "Millard",
      },
      {
        name: "Smith, Maria",
        age: 62,
        hairColor: "Brown",
        buttonName: "Maria",
      }]
    }
  }
  increaseAge = (name) => {
    // Encuentra la persona por su nombre y actualiza la edad
    const updatedList = this.state.list.map((person) => {
      if (person.name === name) {
        return {
          ...person,
          age: person.age + 1,
        };
      }
      return person;
    });

    this.setState({ list: updatedList });
  };
  render = () => {
    return (
      <>
        {this.state.list.map((person, index) => (
          <PersonCard
            key={index}
            name={person.name}
            age={person.age}
            hairColor={person.hairColor}
            buttonName={person.buttonName}
            increaseAge={() => this.increaseAge(person.name)} // Pasar el nombre correcto a increaseAge
          />
        ))}
      </>
    );
  }
}

export default App
