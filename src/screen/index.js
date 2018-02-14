import React from 'react';
import './style.scss';

export default class Screen extends React.Component {
    render() {
        return (
            <div className="display-fluid display">
                <div className='result'>
                <div> {this.props.result} </div>
                    <div className="dec">{this.props.decimals}</div>
                </div>
                <div className='memory-fluid memory'> 
                    <div className="memorytext"> M = {this.props.memory} </div>
                    <div className="displaytext">{this.props.display}</div>   
                </div>
            </div>
        )
    }
}
