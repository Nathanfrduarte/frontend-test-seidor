import React, { useEffect } from 'react'
import styled from 'styled-components'
import HeaderCP from '../../components/HeaderCP'
import TextCP from '../../components/TextCP'
import IEmployee from '../../interfaces/IEmployee'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import { getEmployeeAction } from '../../redux/actions/EmployeesActions'

import aboutIRRF from '../../content/aboutIRRF.json'
import PersonData from '../../content/pessoas.json'
import ListEmployeeTableCP from './components/ListEmployeeTableCP'

const deductionpPerDependent: number = 165.56

function ListEmployeeScreen(): JSX.Element {

    const defaultData: IEmployee[] = PersonData as IEmployee[]
    const employeesData = useSelector((state: AppState) => state.payload)
    const dispatch = useDispatch();

    useEffect(() => {

        if (!!employeesData.employees && employeesData.employees.length > 0) {
            dispatch(getEmployeeAction(employeesData.employees))
        } else {
            dispatch(getEmployeeAction(defaultData))
        }

    }, [])

    /*
    *
    */
    function calculateIRRFDiscount(employee: IEmployee): number {
        const IRBaseSalary: number = employee.rawSalary - employee.discount - (deductionpPerDependent * employee.dependents)
        const IRPFDiscount: number = IRRFTable(IRBaseSalary, employee.rawSalary)

        return IRPFDiscount
    }

    /* 
    *
    */
    function IRRFTable(IRBaseSalary: number, rawSalary: number): number {

        if (rawSalary < 1903.98) {
            return rawSalary
        } else {
            let aliquot: number = 0
            let deductedIRPFPortion: number = 0

            if (rawSalary > 1903.99 && rawSalary < 2826.65) {
                aliquot = 7.5
                deductedIRPFPortion = 142.80
            } else {
                if (rawSalary > 2826.66 && rawSalary < 3751.05) {
                    aliquot = 15
                    deductedIRPFPortion = 354.80
                } else {
                    if (rawSalary > 3751.06 && rawSalary < 4664.68) {
                        aliquot = 22.5
                        deductedIRPFPortion = 636.13
                    } else {
                        aliquot = 27.5
                        deductedIRPFPortion = 869.36
                    }
                }
            }

            const IRPFDiscount = (IRBaseSalary * aliquot) - deductedIRPFPortion
            return IRPFDiscount
        }
    }

    return <>

        <ScreenWrapper>

            <HeaderCP />

            <ContentSCP>

                <h1>Tabela de cáculos do IRRF</h1>

                <TextCP text={aboutIRRF.description} align='justify' />
                <TextCP text={aboutIRRF.about} align='justify' />

                <h2>Seus Funcionários</h2>

                <ListEmployeeTableCP data={employeesData.employees} onCalculateIRRFDiscount={calculateIRRFDiscount} />

            </ContentSCP>

        </ScreenWrapper>

    </>
}

export default ListEmployeeScreen

const ScreenWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ContentSCP = styled.div`
    width: 60%;
    margin-top: 25vh;
    padding: 2%;

    font-family: Inter;
    
    background-color: #ffffff;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
