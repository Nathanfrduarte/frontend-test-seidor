import IEmployee from '../../interfaces/IEmployee';
import { CreateEmployeeActionTypes, CREATE_EMPLOYEES } from '../types/EmployeeTypes';

export const createEmployeeAction = (employees: IEmployee[]): CreateEmployeeActionTypes => {
    return {
        type: CREATE_EMPLOYEES,
        payload: employees
    };
};
