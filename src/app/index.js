import React from 'react';
import Table from '../table';
import Form from '../form';
import './style.scss';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      users: [],
      search: '',
      form: {
        Name: '',
        Lastname: '',
        DNI: ''
      }
    }
  }

  inputChange = (input) => {
    const form = { ...this.state.form, ...input };
    this.setState({ form });
  }

  clearForm() {
    return {
      Name: '',
      Lastname: '',
      DNI: ''
    }
  }

  saveUser = (event) => {
    event.preventDefault();
    const form = { ...this.state.form }
    const users = [...this.state.users, form]
    console.log(form, users);
    this.setState({
      users,
      form: this.clearForm()
    })
  }

  updateUser() {

  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="alert alert-success" id="notice">Welcome React II - 2018/02/09 </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Form saveUser={this.saveUser} inputChange={this.inputChange} {...this.state.form} />
          </div>
          <div className="col">
            <h1 className="text-center">Listing Users</h1>
            <div className="row">
              <div className="col-8 offset-4 text-right">
                <div className="input-group mb-4">
                  <input type="text" id="search" placeholder="Enter Name" className="form-control" />
                  <div className="input-group-append">
                    <button className="btn btn-default">Search</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}