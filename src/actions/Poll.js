export const SET_POLL = 'SET_POLL'

export function setPoll(poll) {
  return {
    type: SET_POLL,
    poll,
  }
} 