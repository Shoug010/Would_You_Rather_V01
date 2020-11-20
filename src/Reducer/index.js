import { combineReducers } from 'redux'
import user from './Users'
import autheduser from './authedUser'
import questions from './Questions'
import poll from './Poll'

export default combineReducers ({
    user,
    autheduser,
    questions,
    poll
})