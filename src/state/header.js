const HIDE_NAV = "hideNav"
const PREV_SCROLL_POS = "prevScrollPos"
const NAV_TRANSPARENT = "navTransparent"
const NAV_COLOR = "navColor"
const NAV_HOVER = "navHover"
const NAV_HOVER_CAT = "navHoverCat"

const initialState = {
  hideNav: false,
  prevScrollPos: 0,
  navTransparent: true,
  navColor: "white",
  navHover: false,
  navHoverCat: null,
}

export const setHideNav = bool => {
  return {
    type: HIDE_NAV,
    bool,
  }
}

export const setPrevScrollPos = int => {
  return {
    type: PREV_SCROLL_POS,
    int,
  }
}

export const setNavTransparent = bool => {
  return {
    type: NAV_TRANSPARENT,
    bool,
  }
}

export const setNavColor = string => {
  return {
    type: NAV_COLOR,
    string,
  }
}

export const setNavHover = bool => {
  return {
    type: NAV_HOVER,
    bool,
  }
}

export const setNavHoverCat = obj => {
  return {
    type: NAV_HOVER_CAT,
    obj,
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case HIDE_NAV:
      return Object.assign({}, state, {
        hideNav: action.bool,
      })
    case PREV_SCROLL_POS:
      return Object.assign({}, state, {
        prevScrollPos: action.int,
      })
    case NAV_TRANSPARENT:
      return Object.assign({}, state, {
        navTransparent: action.bool,
      })
    case NAV_COLOR:
      return Object.assign({}, state, {
        navColor: action.string,
      })
    case NAV_HOVER:
      return Object.assign({}, state, {
        navHover: action.bool,
      })
    case NAV_HOVER_CAT:
      return Object.assign({}, state, {
        navHoverCat: action.obj,
      })
    default:
      return state
  }
}
