import {FETCH_WEATHER} from '../actions/index';

export default function(state=[],action){
  // console.log('action recieved ', action);

  switch(action.type){
    case FETCH_WEATHER:
      console.log('payload: ', action.payload);
      // console.log('new State: ', [action.payload.data, ...state]  )
      return [action.payload.data, ...state]
    break;
    default:
      return state
    break;
  }
}
