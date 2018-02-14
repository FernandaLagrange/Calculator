import React from 'react';
import Keyboard from '../keyboard';
import Screen from '../screen';
import './style.scss';


export default class App extends React.Component {

  constructor() {
    super();
    this.state ={
      display: 0,
      result: 0,
      decimals: ".00",
      op: [],
      decimal: true,
      memory: 0,
    }
    
  }

  

  pusher = (event) => {
    event.preventDefault();
      const num = event.target.value; 
      console.log(num); 
      if (this.state.op.length <=13) {
      this.state.op += num;       
       this.setState({display: this.state.op})
      } else {
        this.setState({display: '# of max chars reached'})
      } 
   }

   pusher2 = (event) => { 
    event.preventDefault();
    const num = event.target.value;
    const last = this.state.op.charAt(this.state.op.length-1);
    
    if(this.state.op.length <= 13){
       if ((last === "+") || (last === '*') || (last === '-') || (last ==='/') || (last ==='.')) { 
       } else {
        this.state.op += num;
         this.state.decimal = true;
         this.setState({display: this.state.op})
       }
    } else {
      this.setState({display: '# of max chars reached'})
    }
  }
  
  pusher3 = (event) => {
    event.preventDefault();
    var num = event.target.value;
      if (this.state.op.length <=13) {
      this.state.op += num;     
      this.state.op = this.state.op.replace(/\-+/g, '-');
        this.state.decimal=true;
      this.setState({display: this.state.op})
     } else {
       this.setState({display: '# of max chars reached'})
     }
  }

  pusher4 = (event) => { 
    event.preventDefault();
    const num = event.target.value;
    if (this.state.op.length <= 13) {
    if (this.state.decimal) {
    this.state.op += num;
    this.setState({display: this.state.op})
    this.state.decimal = false; 
    }
    }
     else {
     this.setState({display: '# of max chars reached'})
     } 
  }

  result = (event) => { 
    event.preventDefault();
    
    const result = eval(this.state.op).toFixed(2);
    const ind = result.indexOf('.');
    
    if (String(result).length <= 11) {
    this.setState({result: result.slice(0,ind),
                         decimals: result.slice(ind)})   
    }
    else {
      this.setState({result: 'error', decimals:""})
    }
  }

  reset = (event) => {
    event.preventDefault();
    this.state.op=[];
    this.state.decimal = true;
    this.setState({result: 0, display:0, decimals:'.00', memory:0});
  }

  delete = (event) => {
    event.preventDefault();
    this.state.op = this.state.op.slice(0,-1);
    this.setState({display: this.state.op})
    if(this.state.op.charAt(this.state.op.length-1) === '.'){
      }
    if(op.charAt(op.length-2) !== '.'){
      this.state.decimal = true;

    }
    
  }

  memory1 = (event) => {
    event.preventDefault();
    this.setState({memory: 0})
  }

  memory2 = (event) =>  {
    event.preventDefault();
    if(this.state.memory!=0) {
    const result = (eval(this.state.op + this.state.memory)).toFixed(2);
    console.log(this.state.op);
    console.log(this.state.memory);
    console.log(result);
    const ind = result.indexOf('.');
      if (String(result).length <= 11) {
      this.state.op=[];
      this.setState({result: result.slice(0,ind),
                            decimals: result.slice(ind), display:0})   
      }
      else {
        this.setState({result: 'error', decimals:""})
      }
    }
    else {
      this.setState({display: 'No memory saved'})
    }
  }

  memory3 = (event) => {
    event.preventDefault();
    var memory = event.target.value;
    this.state.memory = this.state.memory - eval(this.state.op) ;
    this.state.op=[];
    this.state.decimal = true;
    this.setState({memory: this.state.memory, display: 0})
  }

  memory4 = (event) => {
    event.preventDefault();
    var memory = event.target.value;
    this.state.memory = eval(this.state.op) + this.state.memory;
    this.state.op=[];
    this.state.decimal = true;
    this.setState({memory: this.state.memory, display: 0})
  }

  render() {
    console.log(this.state.display);
    var memory = this.state.memory;
    var result = this.state.result;
    var display = this.state.display;
    var decimals = this.state.decimals;
    return (
      <div className="container-fluid container">
        <div className="row">
          <div className="col-12">
            <Screen result={result} decimals={decimals} display={display} memory={memory}/>
          </div>
        </div>
        <Keyboard pusher={this.pusher} pusher2={this.pusher2} pusher3={this.pusher3} pusher4={this.pusher4} result={this.result}
        reset={this.reset} delete={this.delete} memory1={this.memory1} memory2={this.memory2} memory3={this.memory3} memory4={this.memory4}/>
      </div>
    )
  }
}