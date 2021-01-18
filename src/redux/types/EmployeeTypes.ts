import IEmployee from "../../interfaces/IEmployee"

export const CREATE_EMPLOYEES = 'CREATE_EMPLOYEES'
export const REMOVE_EMPLOYEES = 'REMOVE_EMPLOYEES'

export interface CreateEmployeeStateType {
    employees: IEmployee[]
}

interface CreateEmployeeActionType {
    type: typeof CREATE_EMPLOYEES
    payload: IEmployee[]
}

export type CreateEmployeeActionTypes = CreateEmployeeActionType
