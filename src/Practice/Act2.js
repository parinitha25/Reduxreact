import React, { Component } from 'react';
import {connect} from 'react-redux';


class Act2 extends Component {
    render() {
        return (
            <div className='App'>
                <div className='Age-label'>
                    <span>using redux</span><br/>
                    yourage:<span>{this.props.age}</span>
                </div>
                <button onClick={this.props.onAge}>Age</button>
               
             
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        age:state.age
    };
};
const mapDispatchToProps=(dispatch)=>{
    return{
        onAge:()=>dispatch({type:'AGE',value:5}),
       
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Act2);