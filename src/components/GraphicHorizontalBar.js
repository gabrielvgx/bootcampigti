import React, { Component } from 'react';
import css from '../css.module.css';
import Bar from './Bar';
import {percentual} from '../helpers/Util';

export default class GraphicHorizontalBar extends Component {
    constructor(){
        super();
    }
    render() {
        const {values, colors, totalValue} = this.props;
        return (
            <div className={css.barra}>
                {
                    values.map( (cValue, index) => {
                        return <Bar value={percentual(totalValue, cValue)} color={colors[index]} />
                    })
                }
            </div>
        )
    }
}
