import React from 'react';
import ReactDOM from 'react-dom';

export default class Table extends React.Component {
  
  // saveEdit = () => {

  // }
  
  // beginEdit = ({target}, user) => {
  //   ReactDOM.render(<input value={target.value} onBlur={() => {this.saveEdit(user)}} type="text"/>,target);
  // }
  
  render() {
    const users = this.props.users.map((user) => (
      <tr key={user.id}>
        <td>
          {user.Name}
        </td>
        <td>
          {user.Lastname}
        </td>
        <td>
          {user.DNI}
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => { this.props.delete(user.id) }}> Delete</button>
        </td>
      </tr>
    ));

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Lastname</th>
            <th>DNI</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users}
        </tbody>
      </table>
    )
  }
}