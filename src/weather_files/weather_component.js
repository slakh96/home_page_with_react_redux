import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import $ from 'jquery';

class Weather extends Component {

    componentWillMount(){
        var name = "codemzy";
        $.get('https://api.openweathermap.org/data/2.5/weather?id=6087824&APPID=2fbd68a1db191e6cf5ee3f331f83447a', function(response) {
          console.log(response);//2fbd68a1db191e6cf5ee3f331f83447a
        });//Save responses into vars to be the weather data, then place the weather data on the screen
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