import React from 'react';
import './style.scss'

export default class ButtonInput extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div className="buttonh">
        <button className={this.props.type} onClick={this.props.method} value={this.props.title}>{this.props.title}</button>
      </div>
    )
  }
}

