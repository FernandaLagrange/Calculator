import React from 'react';

export default function TextInput(props) {
  return (
    <div className="form-group">
      <label>{props.title}</label>
      <input type="text" className="form-control" />
    </div>
  )
}