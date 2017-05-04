import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { fetchWeather} from '../actions/index';

/*
APPID
9f7fe3b0ceb0a7cf1e86812469152bc0
*/

class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      term: ''
    }
  }

  submitForm(e){
    e.preventDefault();
    // We need to fetch weather data
    console.log('search: ',this.state.term)
    this.props.fetchWeather(this.state.term)
    this.setState({term:''});
  }

  render(){
    return(
      <form onSubmit={this.submitForm.bind(this)} className="input-group">
        <input
          className="form-control"
          placeholder="Get a five-day forecast in your favorite cities"
          value={this.state.term}
          onChange={e => this.setState({term: e.target.value})} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    fetchWeather: fetchWeather
  },dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
