import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import $ from 'jquery';

class Weather extends Component {

    componentWillMount(){
        var name = "codemzy";
        $.get('https://api.openweathermap.org/data/2.5/weather?id=6087824&APPID=2fbd68a1db191e6cf5ee3f331f83447a', function(response) {
          console.log(response);//2fbd68a1db191e6cf5ee3f331f83447a
        });
    }

    render(){
        return (
            <div>
                This is the weather!
            </div>
        )
    }
}
export default Weather;