import {SET_POLL} from '../actions/Poll'

export default function poll (state ={}, action){
    switch (action.type){
    case SET_POLL:
        return{
            ...state,
            ...action.poll
        }
        default:
            return state       
    }
}