import React, { Component } from 'react';
import {connect} from 'react-redux';



class Actiona extends Component {
    render() {
        return (
            <div className='App'>
                <div>
                    <span>using redux</span><br/>
                    numa:<span>{this.props.numa}</span>
                    numb:<span>{this.props.numb}</span>
                    numc:<span>{this.props.numc}</span>
                    numd:<span>{this.props.numd}</span>
                </div>
                <button onClick={this.props.onupdatea} >UPDATEA</button>
                <button onClick={this.props.onupdateb} >UPDATEB</button>
                <button onClick={this.props.onupdatec} >UPDATEC</button>
                <button onClick={this.props.onupdated} >UPDATED</button>
             
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        numa:state.numa,
        numb:state.numb,
        numc:state.numc,
        numd:state.numd
    };
};
const mapDispatchToProps=(dispatch)=>{
    return{
        onupdatea:()=>dispatch({type:'UPDATEA'}),
        onupdateb:()=>dispatch({type:'UPDATEB'}),
        onupdatec:()=>dispatch({type:'UPDATEC'}),
        onupdated:()=>dispatch({type:'UPDATED'})
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Actiona);
