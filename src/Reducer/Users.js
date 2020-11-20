import {RECEIVE_USERS,TOGGLE_User,add_QuestionForUser} from '../actions/users'

export default function user (state ={}, action){
    switch (action.type){
    case RECEIVE_USERS:
        return{
            ...state,
            ...action.user
        }
    case TOGGLE_User :
        console.log("state",state);
        console.log("action=",action);
        console.log("action.qid=",action.qid);
        console.log("action.answer=",action.answer);
    
        return {
            ...state,
            [action.authedUser]: {
            ...state[action.authedUser],
            answers: {
                ...state[action.authedUser].answers,
                [action.qid]: action.answer
            }
            }
        }

    case add_QuestionForUser:
        console.log("question for user",state[action.author].questions);
            return{
                ...state,
                [action.author]: {
                ...state[action.author],
                questions: state[action.author].questions.push(action.id)
                }


            }
        default:
            return state       
    }
}
