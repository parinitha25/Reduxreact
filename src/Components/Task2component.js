import React, { Component } from 'react';
import {connect} from 'react-redux';
import {onUpdateA,onUpdateB,onUpdateC,onUpdateD} from '../Action/Task2action';

class Task2component extends Component{
    render(){
        return(
            <div> your number:
            <span>{this.props.numa}</span>    
            <button onClick={()=>this.props.onUpdateA(this.props.numc)}>UpdateA</button>
            <span>{this.props.numb}</span>
            <button onClick={()=>this.props.onUpdateB(this.props.numd)}>UpdateB</button>
            <span>{this.props.numc}</span>
            <button onClick={()=>this.props.onUpdateC(this.props.numa)}>UpdateC</button>
            <span>{this.props.numd}</span>
            <button onClick={()=>this.props.onUpdateD(this.props.numb)}>UpdateD</button>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    const{numa}=state.Task2reducerA;
    const{numb}=state.Task2reducerB;
    const{numc}=state.Task2reducerC;
    const{numd}=state.Task2reducerD;
    return{numa,numb,numc,numd};
};
export default connect(mapStateToProps,{onUpdateA,onUpdateB,onUpdateC,onUpdateD})(Task2component);
