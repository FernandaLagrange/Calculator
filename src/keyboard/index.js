import React from 'react';
import ButtonInput from '../button-input';
import './style.scss';

export default class Keyboard extends React.Component {

  render() {
    return (
    <div className="row  keys"  >
        <div className="col-3">
            <ButtonInput  type="buttongray" title='MC' method={this.props.memory1}/>
            <ButtonInput  type="button buttongray" title='(' method={this.props.pusher4}/>
            <ButtonInput  type="buttonblack" title='7' method={this.props.pusher}/>
            <ButtonInput  type="buttonblack" title='4' method={this.props.pusher}/>
            <ButtonInput  type="buttonblack" title='1' method={this.props.pusher}/>
            <ButtonInput  type="buttonblack" title='0' method={this.props.pusher}/>
        </div>
        <div className="col-3">
            <ButtonInput  type="button buttongray" title='MR' method={this.props.memory2}/>
            <ButtonInput  type="button buttongray" title=')' method={this.props.pusher4}/>
            <ButtonInput  type="button buttonblack" title='8' method={this.props.pusher}/>
            <ButtonInput  type="button buttonblack" title='5' method={this.props.pusher}/>
            <ButtonInput  type="button buttonblack" title='2' method={this.props.pusher}/>
            <ButtonInput  type="button buttonblack" title='.' method={this.props.pusher4}/>
        </div>
        <div className="col-3">
            <ButtonInput  type="button buttongray" title='M-' method={this.props.memory3}/>
            <ButtonInput  type="button buttongray" title='AC' method={this.props.reset}/>
            <ButtonInput  type="button buttonblack" title='9' method={this.props.pusher}/>
            <ButtonInput  type="button buttonblack" title='6' method={this.props.pusher}/>
            <ButtonInput  type="button buttonblack" title='3' method={this.props.pusher}/>
            <ButtonInput  type="button buttonblack" title='C' method={this.props.delete}/>
        </div>
        <div className="col-3">
            <ButtonInput  type="button buttongray" title='M+' method={this.props.memory4}/>
            <ButtonInput  type="button buttonpink" title='/' method={this.props.pusher2}/>
            <ButtonInput  type="button buttonpink" title='*' method={this.props.pusher2}/>
            <ButtonInput  type="button buttonpink" title='-' method={this.props.pusher3}/>
            <ButtonInput  type="button buttonpink" title='+' method={this.props.pusher2}/>
            <ButtonInput  type="button buttonorange" title='=' method={this.props.result}/> 
        </div>
    </div>
    )
  }
} 
