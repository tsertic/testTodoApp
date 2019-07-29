import React,{Component} from 'react';

class BasicInfoForm extends Component{

    handleNext=e=>{
        e.preventDefault();
        this.props.nextStep();
    }
    handlePrev=e=>{
        e.preventDefault();
        this.props.prevStep();
    }
    handleChange=e=>{
        this.props.changeInput(e);
    }
    render(){
        return(
            <div>
                <h1>BInfo</h1>
                <input type='text' name='firstName' value={this.props.values.firstName}
                 onChange={this.handleChange} />
                <input type='text' name='lastName' value={this.props.values.lastName}
                 onChange={this.handleChange} />
                <button onClick={this.handleNext}>Continue</button>
                <button onClick={this.handlePrev}>Go Back</button>
            </div>
        )
    }
}

export default BasicInfoForm;