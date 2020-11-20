import {_saveQuestion,_saveQuestionAnswer} from '../_DATA'
import {handleAddQuestionForUser} from './users'

export const RECEIVE_questions = 'RECEIVE_questions'
export const add_questions = 'add_questions'
export const TOGGLE_Question ='TOGGLE_Question'

export function receiveQuestions (questions){
    return{
        type: RECEIVE_questions,
        questions,
    }
}

export function AddQuestion (questions){
    return{
        type: add_questions,
        questions,
    }
}

export function handleAddQuestin (questions) {
    return (dispatch) => {
    return _saveQuestion(questions).then((questions) => {
      dispatch(AddQuestion(questions))
      dispatch(handleAddQuestionForUser(questions))
    })
  }
}

function toggleQuestion ({qid, authedUser, answer}) {
  console.log("toggleQuestion",qid);
    return {
      type: TOGGLE_Question,
      qid,
      authedUser, 
      answer
    }
  }
  export function handleToggleQuestion (questions) {
    
    return (dispatch) => {
      dispatch(toggleQuestion(questions))
      return _saveQuestionAnswer(questions)

    }
  }


