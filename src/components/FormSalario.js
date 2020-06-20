import React, { Component } from 'react';
import {calculateSalaryFrom} from '../helpers/CalculoCLT';
import GraphicHorizontalBar from './GraphicHorizontalBar';
import css from '../css.module.css';
export default class FormSalario extends Component{
    constructor(){
        super();
        this.state = {
            salary: '',
            baseINSS: '',
            baseIRPF: '',
            discountINSS: '',
            discountIRPF: '',
            netSalary: ''
        }
    }

    handleChangeInput = (event) => {
        let salary = event.target.value;
        let info = calculateSalaryFrom(salary);
        info.salary = salary;
        this.setState(info);
    }

    render(){
        const {salary, baseINSS, baseIRPF, discountINSS, discountIRPF, netSalary} = this.state;
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <div>
                                <label>Salário Bruto</label>
                                <input type="number" min="0" onChange={this.handleChangeInput} value={salary} className={css.inputBlack}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s3">
                            <div>
                                <label>Base INSS</label>
                                <input type="text" disabled value={baseINSS.toLocaleString('br')} className={css.inputBlack}/>
                            </div>
                        </div>
                        <div className="input-field col s3">
                            <div>
                                <label>Desconto INSS</label>
                                <input type="text" disabled value={discountINSS.toLocaleString('br')} style={{color: "#e67e22", fontWeight: "bold"}}/>
                            </div>
                        </div>
                        <div className="input-field col s3">
                            <div>
                                <label>Base IRPF</label>
                                <input type="text" disabled value={baseIRPF.toLocaleString('br')} className={css.inputBlack}/>
                            </div>
                        </div>
                        <div className="input-field col s3">
                            <div>
                                <label>Desconto IRPF</label>
                                <input type="text" disabled value={discountIRPF.toLocaleString('br')} style={{color: "#c0392b", fontWeight: "bold"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s3">
                            <div>
                                <label>Salário Líquido</label>
                                <input type="text" disabled value={netSalary.toLocaleString('br')} style={{color: "#16a085", fontWeight: "bold"}}/>
                            </div>
                        </div>
                    </div>
                </form>
                <GraphicHorizontalBar totalValue={salary} values={[discountINSS, discountIRPF, netSalary]} colors={["#e67e22", "#c0392b", "#16a085"]}/>
            </div>
        );
    }
}