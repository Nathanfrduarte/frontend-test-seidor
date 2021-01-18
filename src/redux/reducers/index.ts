import { combineReducers } from 'redux'
import { employeeReducer } from './EmployeeReducer'

const rootReducer = combineReducers({
    payload: employeeReducer
});

export default rootReducer;