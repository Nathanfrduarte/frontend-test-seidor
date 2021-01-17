import { combineReducers } from 'redux'
import { getEmployeeReducer } from './EmployeeReducer'

const rootReducer = combineReducers({
    payload: getEmployeeReducer
});

export default rootReducer;