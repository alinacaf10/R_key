import React, { Component } from "react";
import "./Employee.css";

export default class Employee extends Component {
  state = {
    employes: [
      {
        id: 1,
        name: "Frodo Baggins",
        department: "Management",
        role: "CEO",
        alive: true,
      },
      {
        id: 2,
        name: "Samwise Gamgee",
        department: "Management",
        role: "CTO",
        alive: false,
      },
      {
        id: 3,
        name: "Gandalf the Gray",
        department: "Recruitment",
        role: "Lead-recruiter",
        alive: true,
      },
      {
        id: 4,
        name: "Aragorn",
        department: "Security",
        role: "Security officer",
        alive: false,
      },
      {
        id: 5,
        name: "Legolas",
        department: "Management",
        role: "Office manager",
        alive: true,
      },
    ],
  };
  render() {
    return (
      <div className="common">
        {this.state.employes
          .filter((user) => user.alive)
          .map((user) => (
            <div className="child" key={user.id}>
              <p>Employee id: {user.id}</p>
              <p>Employee name: {user.name}</p>
              <p>Employee department: {user.department}</p>
              <p>Employee role: {user.role}</p>
              <p>Is Employee alive: {user.alive ? "yes" : "not"}</p>
            </div>
          ))}
      </div>
    );
  }
}
