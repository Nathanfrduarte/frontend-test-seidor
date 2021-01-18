import { CREATE_EMPLOYEES, CreateEmployeeStateType, CreateEmployeeActionTypes } from "../types/EmployeeTypes";

const initialStateGetEmployee: CreateEmployeeStateType = {
    employees: []
};

export const employeeReducer = (
    state = initialStateGetEmployee,
    action: CreateEmployeeActionTypes
): CreateEmployeeStateType => {

    switch (action.type) {
        case CREATE_EMPLOYEES:

            return {
                ...state,
                employees: action.payload
            }
        default:
            return state
    }
}