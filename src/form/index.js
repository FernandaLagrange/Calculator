import React from 'react';
import TextInput from '../text-input';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <TextInput inputChange={this.props.inputChange} title='Name' value={this.props.Name}/>
        <TextInput inputChange={this.props.inputChange} title='Lastname' value={this.props.Lastname}/>
        <TextInput inputChange={this.props.inputChange} title='DNI' value={this.props.DNI}/>
        <button onClick={this.props.saveUser} className="btn btn-success">create</button>
      </form>
    )
  }
} 