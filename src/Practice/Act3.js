import React, { Component } from 'react';

class Act3 extends Component {
    constructor(props){
        super(props);
        this.state={
            age:25
           
        }
    }
    changeagei=()=>{
        this.setState({age:this.state.age+1})
    }
    changeaged=()=>{
        this.setState({age:this.state.age-1})
    }
   
    render() {
        return (
            <div className='App-header'>
              <h1>{this.state.age}</h1>
              <input type='button'  value='agei' onClick={this.changeagei}></input>
              <input type='button'  value='aged' onClick={this.changeaged}></input>
            </div>
        );
    }
}

export default Act3;