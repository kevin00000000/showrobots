import {
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../constants';

const initState = {
    isPending: false,
    robots: [],
    error: ''
}

const requestRobotsReducer = (state=initState, action) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {robots: action.payload, isPending: false})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state,  {error: action.payload, isPending: false})
        default:
            return state;
    }
}

export default requestRobotsReducer