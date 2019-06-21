import React, { Component } from 'react';
import {connect} from 'react-redux';
import {submit} from '../Action/Task3formaction';

class Task3component extends Component{
    render(){
        return(
            <div className='App-header'> 
            <form>
            <label>Username</label>
                    <input type='text'/>
            <label>Password</label>
                    <input type='text'/>
            </form><br/>
            <button onClick={this.props.submit}>submit</button>
            <h1>{this.props.message}</h1>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    const{name}=state.Task3formreducer;
    const{password}=state.Task3formreducer;
    const{message}=state.Task3formreducer;
    return{name,password,message};
};
export default connect(mapStateToProps,{submit})(Task3component);