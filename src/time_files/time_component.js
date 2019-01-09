import React, { Component } from 'react';
import {connect} from "react-redux";
import time_update from './time_action';
import {bindActionCreators} from "redux";
import '../App.css';

class Time extends Component {
      componentDidMount() {//delays for 1 second before sending the time update again
        this.interval = setInterval(() => this.props.time_update(), 1000);
      }
      componentWillUnmount() {//sets the time interval back to zero.
        clearInterval(this.interval);
      }
      render(){
        return(
          <div className = "time">
          <h1>{this.props.time.hour}:{this.props.time.min}:{this.props.time.secs}</h1>
          <h3>{this.props.time.day}, {this.props.time.month} {this.props.time.date} {this.props.time.year}</h3>
          </div>
        );
    }
}
function mapStateToProps(state){
    return {
        time: state.time //passed to the component as props, so can do this.props.time, instead of this.props.state.tiem
    };
};
function mapDispatchToProps(dispatch){
    return bindActionCreators({time_update: time_update}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Time);