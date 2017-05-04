import React, {Component} from 'react';
import {Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data){
  return _.round(data.reduce( (p,c) => p+c ) / data.length)
}

const Chart = (props) => {
  return(
    <div>
    <Sparklines height={120} width={180} data={props.weatherData}>
      <SparklinesLine color={props.color} />
      <SparklinesSpots />
      <SparklinesReferenceLine type="mean"/>
    </Sparklines>
    <div>{average(props.weatherData)} {props.units}</div>
    </div>
  )
}

export default Chart
