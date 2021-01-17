import IEmployee from "../../interfaces/IEmployee";

export const GET_EMPLOYEES = 'GET_EMPLOYEES';

export interface GetEmployeeStateType {
    employees: IEmployee[];
}

interface GetEmployeeActionType {
    type: typeof GET_EMPLOYEES;
    payload: IEmployee[];
}

export type EmployeeActionTypes = GetEmployeeActionType;