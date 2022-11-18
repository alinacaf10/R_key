import React, { Component } from "react";
import "./Employee.css"

export default class Employee extends Component {
  state = {
    employes: [
      { id: 1, name: "Frodo Baggins", department: "Management", role: "CEO" },
      { id: 2, name: "Samwise Gamgee", department: "Management", role: "CTO" },
      {
        id: 3,
        name: "Gandalf the Gray",
        department: "Recruitment",
        role: "Lead-recruiter",
      },
      {
        id: 4,
        name: "Aragorn",
        department: "Security",
        role: "Security officer",
      },
      {
        id: 5,
        name: "Legolas",
        department: "Management",
        role: "Office manager",
      },
    ],
  };
  render() {
    return (
      <div className="common">
        {this.state.employes.map((user) => (
          <div className="child">
            <p>Employee id: {user.id}</p>
            <p>Employee name: {user.name}</p>
            <p>Employee department: {user.department}</p>
            <p>Employee role: {user.role}</p>
          <vr/>
          </div>
        ))}
      </div>
    );
  }
}
