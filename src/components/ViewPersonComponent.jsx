import React, { Component } from "react";
import PersonService from "../services/PersonService";

class ViewPersonComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      person: {},
    };
  }

  componentDidMount() {
    PersonService.getPersonById(this.state.id).then((res) => {
      this.setState({ person: res.data });
    });
  }

  goPersons() {
    this.props.history.push("/persons");
  }

  render() {
    return (
      <div>
        <div
          className="card col-md-6 offset-md-3"
          style={{ marginBottom: "5px" }}
        >
          <h3 className="text-center"> View Person Details</h3>

          <div className="card-body">
            <div className="row">
              <label className="col"> First Name: </label>
              <div className="col">{this.state.person.firstName}</div>
            </div>
            <div className="row">
              <label className="col"> Last Name: </label>
              <div className="col"> {this.state.person.lastName}</div>
            </div>
            <div className="row">
              <label className="col"> email: </label>
              <div className="col"> {this.state.person.email}</div>
            </div>
          </div>
          <div className="row">
            <button
              className="btn btn-info col"
              onClick={() => this.goPersons()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPersonComponent;
