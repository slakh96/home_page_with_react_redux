import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import $ from 'jquery';

class Weather extends Component {

    componentWillMount(){
        var name = "codemzy";
        $.get('https://samples.openweathermap.org/data/2.5/weather?id=6087824&appid=2fbd68a1db191e6cf5ee3f331f83447a' + name, function(response) {
          console.log(response);
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