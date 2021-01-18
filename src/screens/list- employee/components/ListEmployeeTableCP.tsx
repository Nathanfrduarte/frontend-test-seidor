import React from 'react'
import styled from 'styled-components'
import IEmployee from '../../../interfaces/IEmployee'

interface IListEmployeeTableCPProps {
    data: IEmployee[]
    onCalculateIRRFDiscount: (employee: IEmployee) => number
    onDelete: (employee: IEmployee) => void
}

/*
 * Componente de Tabela para listagem de Funcionários
 */
function ListEmployeeTableCP(props: IListEmployeeTableCPProps): JSX.Element {

    return (
        <TableSCP>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>CPF</td>
                    <td>Salário</td>
                    <td>Desconto</td>
                    <td>Dependentes</td>
                    <td>Desconto IRPF</td>
                    <td></td>
                </tr>
            </thead>

            <tbody>
                {
                    props.data.map((employee) => {
                        return (<>
                            <tr key={'employee_' + employee.cpf}>
                                <td>{employee.name}</td>
                                <td>{employee.cpf}</td>
                                <td>R${employee.rawSalary.toFixed(2).replace('.', ',')}</td>
                                <td>R${employee.discount.toFixed(2).replace('.', ',')}</td>
                                <td>{employee.dependents}</td>
                                <td>R${props.onCalculateIRRFDiscount(employee).toFixed(2).replace('.', ',')}</td>
                                <td className='action-column'>
                                    <EditButton >Editar</EditButton>
                                    <DeleteButton onClick={() => props.onDelete(employee)} >Excluir</DeleteButton>
                                </td>
                            </tr>
                        </>)
                    })
                }
            </tbody>
        </TableSCP>
    )
}

export default ListEmployeeTableCP

const TableSCP = styled.table`
    width: 100%;
    border: 1px solid #f0f0f0;

    thead tr {
        background-color: #F2F2F2
    }

    tr {
        height: 40px;
    }

    .action-column {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`

const EditButton = styled.button`
    width: 50%;
    border: 1px solid  #5C8599;
    border-radius: 5px;
    background:  #f0f0f0;
    color: #5C8599;
    transition: background-color 0.2s;

    :hover{
        background:  #5C8599 ;
        color: #f0f0f0;
    }
`

const DeleteButton = styled.button`
    width: 50%;
    border: 1px solid  #ff5757;
    border-radius: 5px;
    background:  #f0f0f0;
    color:  #ff5757;
    transition: background-color 0.2s;

    :hover{
        background:  #ff5757 ;
        color: #f0f0f0;
    }
`