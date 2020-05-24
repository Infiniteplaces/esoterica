const MOBILE = "mobile"
const COOKIES = "cookies"

const initialState = {
  mobile: false,
  cookies: false,
}

export const setMobile = bool => {
  return {
    type: MOBILE,
    bool,
  }
}
export const setCookies = bool => {
  return {
    type: COOKIES,
    bool,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case MOBILE:
      return Object.assign({}, state, {
        mobile: action.bool,
      })
    case COOKIES:
      return Object.assign({}, state, {
        cookies: action.bool,
      })
    default:
      return state
  }
}
