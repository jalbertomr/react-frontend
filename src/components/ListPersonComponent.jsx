import React, { Component } from "react";
import PersonService from "../services/PersonService";

class ListPersonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { persons: [] };
    this.addPerson = this.addPerson.bind(this);
    this.updatePerson = this.updatePerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  componentDidMount() {
    PersonService.getPersons().then((res) => {
      this.setState({ persons: res.data });
    });
  }

  addPerson() {
    this.props.history.push("/add-person/_add");
  }

  updatePerson(id) {
    this.props.history.push(`/add-person/${id}`);
  }

  deletePerson(id) {
    PersonService.deletePersonById(id).then((res) => {
      this.setState({
        persons: this.state.persons.filter((person) => person.id !== id),
      });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Persons List</h2>
        <button
          className="btn btn-primary"
          onClick={this.addPerson}
          style={{ marginBottom: "5px" }}
        >
          Add Person
        </button>
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
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.updatePerson(person.id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-danger"
                      style={{ marginLeft: "10px" }}
                      onClick={() => this.deletePerson(person.id)}
                    >
                      Delete
                    </button>
                  </td>
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
