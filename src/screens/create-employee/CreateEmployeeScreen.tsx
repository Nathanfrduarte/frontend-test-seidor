import React from 'react'
import styled from 'styled-components'
import HeaderCP from '../../components/HeaderCP'
// import { bindActionCreators } from 'redux'
import { /*connect,*/ useDispatch } from 'react-redux'

// import * as employeeActions from '../redux/actions/EmployeesActions'
import IEmployee from '../../interfaces/IEmployee'
import { getEmployeeAction } from '../../redux/actions/EmployeesActions'
import CreateEmployeeFormCP from './components/CreateEmployeeFormCP'

// const mapDispatchToProps = (dispatch: any) => {
//     bindActionCreators(employeeActions, dispatch)
// }

function CreateEmployeeScreen(): JSX.Element {
    const dispatch = useDispatch();

    function handleSubmit(employee: IEmployee[]) {

        // Salva dados no Redux
        dispatch(getEmployeeAction(employee))
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

// export default connect(null, mapDispatchToProps)(CreateEmployeeScreen)
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
