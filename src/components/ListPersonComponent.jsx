import React, { Component } from "react";
import PersonService from "../services/PersonService";

class ListPersonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { persons: [] };
  }

  componentDidMount() {
    PersonService.getPersons().then((res) => {
      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Persons List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Person First Name</th>
                <th>Person Last Name</th>
                <th>Person email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.persons.map((person) => (
                <tr key={person.id}>
                  <td> {person.firstName}</td>
                  <td> {person.lastName}</td>
                  <td> {person.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListPersonComponent;
