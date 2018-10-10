import { combineReducers } from 'redux'
import searchFieldReducer from './searchFieldReducer'
import requestRobotsReducer from './requestRobotsReducer'

const rootReducer = combineReducers({
    searchFieldReducer,
    requestRobotsReducer,
})

export default rootReducer