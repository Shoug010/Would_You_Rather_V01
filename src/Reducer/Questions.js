import {RECEIVE_questions,add_questions,TOGGLE_Question} from '../actions/Questions'

export default function questions (state ={}, action){
    switch (action.type){
    case RECEIVE_questions:
        return{
            ...state,
            ...action.questions
        }
    case add_questions:
      return {
        ...state,
        [action.questions.id]: action.questions,
    }
    case TOGGLE_Question :
      console.log("state",state);
      console.log("action=",action);
      console.log("action.qid=",action.qid);
      console.log("action.answer=",action.answer);

      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
          }
        }
      }
    default:
            return state       
    }
}
