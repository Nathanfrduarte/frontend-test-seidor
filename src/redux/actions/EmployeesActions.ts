import IEmployee from '../../interfaces/IEmployee';
import { EmployeeActionTypes, GET_EMPLOYEES } from '../types/EmployeeTypes';

export const getEmployeeAction = (employees: IEmployee[]): EmployeeActionTypes => {
    return {
        type: GET_EMPLOYEES,
        payload: employees
    };
};