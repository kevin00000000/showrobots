import {SEARCH_FIELD_CHANGE} from '../constants'

const initState = {
    searchField: ''
}

const searchFieldReducer = (state=initState, action) => {
    switch (action.type) {
        case SEARCH_FIELD_CHANGE:
            return Object.assign({}, state, {searchField: action.payload})
        default:
            return state;
    }
}

export default searchFieldReducer