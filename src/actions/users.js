export const RECEIVE_USERS = 'RECEIVE_USERS'
export const TOGGLE_User = 'TOGGLE_User'
export const add_QuestionForUser = 'add_QuestionForUser'

export function receiveUsers (user){
    return{
        type: RECEIVE_USERS,
        user,
    }
}
function toggleUser ({qid, authedUser, answer}) {
    console.log("toggleuser",answer);
      return {
        type: TOGGLE_User,
        qid,
        authedUser, 
        answer
      }
    }
    export function handleToggleUser (info) {
      console.log('info',info);
      return (dispatch) => {
        dispatch(toggleUser(info))
  
      }
    }

    export function AddQuestionForUser({id,author}){
        return{
            type: add_QuestionForUser,
            author,
            id
        }
    }
    
    export function handleAddQuestionForUser(questions) {
        return (dispatch) => {
         dispatch(AddQuestionForUser(questions))
      }
    }