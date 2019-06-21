import React, { Component } from 'react';

class Pract1 extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            city:''
           
        }
    }
    handleChange=(e)=>{
        e.preventDefault();
        debugger;
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let reqobj={
            name1:this.state.name,
            city1:this.state.city     
        }
        console.log(reqobj);
    }
    render() {
        return (
            <div>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleChange} />
                    <label>City</label>
                    <input type='text' name="city" onChange={this.handleChange} />
                    <button type='submit' onClick={this.handleSubmit}>submit</button>
               </form>
            </div>
        );
    }
}

export default Pract1;