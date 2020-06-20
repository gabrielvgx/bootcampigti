import React, { Component } from 'react';
export default class Input extends Component {
    constructor(info){
        super();
        this.state = {
            label: info.children.label,
            type: info.children.type,
            class: info.children.class
        };
    }
    render() {
        return (
            <div className={this.state.class}>
                <div>
                    <label>{this.state.label}</label>
                    <input type={this.state.type}/>
                </div>
            </div>
        )
    }
}
