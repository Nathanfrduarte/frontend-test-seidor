import { GET_EMPLOYEES, GetEmployeeStateType, EmployeeActionTypes } from "../types/EmployeeTypes";

const initialStateGetEmployee: GetEmployeeStateType = {
    employees: []
};

export const getEmployeeReducer = (
    state = initialStateGetEmployee,
    action: EmployeeActionTypes
): GetEmployeeStateType => {

    switch (action.type) {
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            }
        default:
            return state
    }
}