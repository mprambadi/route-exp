export const ABOUT = 'ABOUT'

const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ABOUT:
    return { ...state, ...payload }

  default:
    return state
  }
}
