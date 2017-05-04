import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/Chart';

class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const pressures = cityData.list.map(weather => weather.main.pressure)

    return (
      <tr key={name}>
        <td>{name} </td>
        <td><Chart weatherData={temps} color="green" units="F" /></td>
        <td><Chart weatherData={humidities} color="blue" units="hPa" /></td>
        <td><Chart weatherData={pressures} color="purple" units="%" /></td>
      </tr>
    )
  }

  render(){
    if(!this.props.weather.length){
      return(<h2>Nothing yet..</h2>)
    }

    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather.bind(this)) }
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  console.log('weather: ', weather)
  return {weather}
}

export default connect(mapStateToProps)(WeatherList)
