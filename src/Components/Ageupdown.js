import React, { Component } from 'react';
import {connect} from 'react-redux';
import {onAgeUp,onAgeDown} from '../Action/AgedownAction';

class Ageupdown extends Component{
    render(){
        return(
            <div> your age:<span>{this.props.age}</span>
            <button onClick={this.props.onAgeUp}>ageup</button>
            <button onClick={this.props.onAgeDown}>agedown</button>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    const{age}=state.Ageupdownreducer;
    return{age};
};
export default connect(mapStateToProps,{onAgeUp,onAgeDown})(Ageupdown);