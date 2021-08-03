import React, { Component } from "react";
import PersonService from "../services/PersonService";

class CreatePersonComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      email: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveOrUpdatePerson = this.saveOrUpdatePerson.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  componentDidMount() {
    if (this.state.id === "_add") {
      return;
    } else {
      PersonService.getPersonById(this.state.id).then((res) => {
        let person = res.data;
        this.setState({
          firstName: person.firstName,
          lastName: person.lastName,
          email: person.email,
        });
      });
    }
  }

  saveOrUpdatePerson = (e) => {
    e.preventDefault();
    let person = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
    };
    console.log("person => " + JSON.stringify(person));

    if (this.state.id === "_add") {
      PersonService.createPerson(person).then((res) => {
        this.props.history.push("/persons");
      });
    } else {
      PersonService.updatePerson(person, this.state.id).then((res) => {
        this.props.history.push("/persons");
      });
    }
  };

  cancel() {
    this.props.history.push("/persons");
  }

  changeFirstNameHandler(event) {
    this.setState({ firstName: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  changeEmailHandler(event) {
    this.setState({ email: event.target.value });
  }

  getOperationTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Person</h3>;
    } else {
      return <h3 className="text-center">Update Person</h3>;
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getOperationTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                    <label>Last Name</label>
                    <input
                      className="form-control"
                      name="lastName"
                      placeholder="Last Name"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                    <label>email address</label>
                    <input
                      className="form-control"
                      name="email"
                      placeholder="email@"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>
                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdatePerson}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePersonComponent;
