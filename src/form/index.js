import React from 'react';
import TextInput from '../text-input';

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <TextInput title='Name'/>
        <TextInput title='Lastname'/>
        <TextInput title='DNI'/>
        <button className="btn btn-success">create</button>
      </form>
    )
  }
} 