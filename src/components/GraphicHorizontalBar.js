import React, { Component } from 'react'
import css from '../css.module.css'
import Bar from './Bar'

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
                        return <Bar value={(totalValue*cValue)/100} color={colors[index]} />
                    })
                }
            </div>
        )
    }
}
