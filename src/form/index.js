import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" id="user-name" className="form-control" />
        </div>
        <div className="form-group">
          <label>Lastname</label>
          <input type="text" id="user-lastname" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="nameDNI">DNI</label>
          <input type="text" name="user[dni]" id="user-dni" className="form-control" />
        </div>
        <button className="btn btn-success">create</button>
      </form>
    )
  }
} 