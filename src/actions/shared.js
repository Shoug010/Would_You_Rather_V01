import {_getUsers} from '../_DATA'
import {_getQuestions} from '../_DATA'
import {setAuthedUser} from './authedUser'
import {receiveUsers} from './users'
import {receiveQuestions} from './Questions'
import {setPoll} from './Poll'
const poll = {}

export function handleInitialData (){
    const id=""
    return(dispatch)=>{
        return  _getUsers()
        .then((users) => {
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(id))
            dispatch(setPoll(poll))
          })
    }
}
export function handleInitialuser (){
    return(dispatch)=>{
        return  _getUsers()
        .then((users) => {
            dispatch(receiveUsers(users))
          })
    }
}
export function hundleInitialQustions(){
    return(dispatch)=>{
        return _getQuestions()
        .then((questions)=>{
            dispatch(receiveQuestions(questions))
        })
    }
}
