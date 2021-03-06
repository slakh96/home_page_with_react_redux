import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import $ from 'jquery';
import {convert_temp} from "./weather_utilities.js";
import weather_update from "./weather_action.js";

class Weather extends Component {

    componentWillMount(){
        var name = "codemzy";
        var id = "2fbd68a1db191e6cf5ee3f331f83447a";
        $.get('https://api.openweathermap.org/data/2.5/weather?id=6087824&APPID=8', function(response) {
          console.log(response);
          /*
          let cur_temp = response.main.temp;
          let temp_max = response.main.temp_max;
          let temp_min = response.main.temp_min;
          let weather_description = response.weather[0].description;
          console.log(weather_description);
          */
        });//Save responses into vars to be the weather data, then place the weather data on the screen
        let cur_temp = convert_temp(273.15);
        let temp_max = convert_temp(274.15);
        let temp_min = convert_temp(272.15);
        let weather_description = "light rain";
    }
    componentDidMount() {//delays for 1 second before sending the time update again
        //this.interval = setInterval(() => this.props.weather_update(), 1000);
      }

    render(){
        return (
            <div>
                {convert_temp(273.15)}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        weather: state.weather
    };
};
function mapDispatchToProps(dispatch){
    return bindActionCreators({weather_update: weather_update}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Weather);