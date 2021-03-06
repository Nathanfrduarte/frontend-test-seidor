import React, { useEffect } from 'react'
import styled from 'styled-components'
import HeaderCP from '../../components/HeaderCP'
import TextCP from '../../components/TextCP'
import IEmployee from '../../interfaces/IEmployee'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../redux/store'
import { createEmployeeAction } from '../../redux/actions/EmployeesActions'
import aboutIRRF from '../../content/aboutIRRF.json'
import PersonData from '../../content/pessoas.json'
import ListEmployeeTableCP from './components/ListEmployeeTableCP'

const deductionpPerDependent: number = 165.56

/*
 * Página da listagem de Funcionários
 */
function ListEmployeeScreen(): JSX.Element {
    const dispatch = useDispatch()

    // Dados de teste
    const defaultData: IEmployee[] = PersonData as IEmployee[]
    // Dados no Redux
    const employeesData = useSelector((state: AppState) => state.payload)

    useEffect(() => {

        // Carrega os dados de funcionários já cadastrados caso exista
        if (!!employeesData.employees && employeesData.employees.length > 0) {
            dispatch(createEmployeeAction(employeesData.employees))
        } else {
            dispatch(createEmployeeAction(defaultData))
        }

    }, [])

    /*
     * Prepara os dados para calcular o desconto do IRPF
     */
    function handleIRRFDiscount(employee: IEmployee): number {
        // Salário Base IR
        const IRBaseSalary: number = employee.rawSalary - employee.discount - (deductionpPerDependent * employee.dependents)
        // Desconto IRRF
        const IRPFDiscount: number = calculateDiscount(IRBaseSalary, employee.rawSalary)

        return IRPFDiscount
    }

    /* 
     * Calcula o desconto do IRRF
     */
    function calculateDiscount(IRBaseSalary: number, rawSalary: number): number {

        // Tabela progressiva do IRRF para difinição de Alíquota e Parcela a reduzir
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

    /*
     * Remove um funcionário
     */
    function deleteEmployee(employeeToRemove: IEmployee): void {

        // Remove o funcionário da lista de funcionários
        employeesData.employees.splice(employeesData.employees.indexOf(employeeToRemove), 1)
        // Atualiza o Redux
        dispatch(createEmployeeAction(employeesData.employees))
        alert('Funcionário Excluído com Sucesso!')
    }

    return <>

        <ScreenWrapper>

            <HeaderCP />

            <ContentSCP>

                <h1>Tabela de cáculos do IRRF</h1>

                <TextCP text={aboutIRRF.description} align='justify' />
                <TextCP text={aboutIRRF.about} align='justify' />

                <h2>Seus Funcionários</h2>

                <ListEmployeeTableCP
                    data={employeesData.employees}
                    onCalculateIRRFDiscount={handleIRRFDiscount}
                    onDelete={deleteEmployee}
                />

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
