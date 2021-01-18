import React from 'react'
import styled from 'styled-components'
import HeaderCP from '../../components/HeaderCP'
import { useDispatch, useSelector } from 'react-redux'

import IEmployee from '../../interfaces/IEmployee'
import { createEmployeeAction } from '../../redux/actions/EmployeesActions'
import CreateEmployeeFormCP from './components/CreateEmployeeFormCP'
import { AppState } from '../../redux/store'

/*
 * Página da Registro de Funcionários
 */
function CreateEmployeeScreen(): JSX.Element {
    const dispatch = useDispatch();
    // Dados no Redux
    const employeesData = useSelector((state: AppState) => state.payload)

    /*
     * Salva os dados do Formulário
     */
    function handleSubmit(employee: IEmployee) {
        // Salva dados no Redux
        dispatch(createEmployeeAction([...employeesData.employees, employee]))
        alert('Funcionário Registrado com Sucesso!')
    }

    return <>

        <ScreenWrapper>

            <HeaderCP />

            <ContentSCP>

                <h1>Registrar Funcionário</h1>
                <CreateEmployeeFormCP onHandleSubmit={handleSubmit} />

            </ContentSCP>

        </ScreenWrapper>

    </>
}

export default CreateEmployeeScreen

const ScreenWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
