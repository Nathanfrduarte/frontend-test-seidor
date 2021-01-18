import React, { FormEvent, useState } from 'react'
import styled from 'styled-components'
import IEmployee from '../../../interfaces/IEmployee'

interface IListEmployeeTableCPProps {
    onHandleSubmit: (employee: IEmployee) => void
}

/*
 * Componente de Formulário para criação de Funcionários
 */
function CreateEmployeeFormCP(props: IListEmployeeTableCPProps): JSX.Element {

    const [name, setName] = useState<string>('')
    const [cpf, setCpf] = useState<string>('')
    const [rawSalary, setRawSalary] = useState<number>(0)
    const [discount, setDiscount] = useState<number>(0)
    const [dependents, setDependents] = useState<number>(0)

    /*
     * Valida os dados do Formulário
     */
    function validateForm(formData: IEmployee): boolean {

        if (!formData.name) {
            return false
        }

        if (!formData.cpf) {
            return false
        }

        if (!formData.rawSalary) {
            return false
        }

        if (!formData.discount) {
            return false
        }

        if (!formData.dependents) {
            return false
        }

        return true
    }

    /*
     * Limpa os campos do Formulário
     */
    function resetForm() {
        setName('')
        setCpf('')
        setRawSalary(0)
        setDiscount(0)
        setDependents(0)
    }

    /*
     * Ação para salvar os dados
     */
    function handleSubmit(event: FormEvent) {
        // Previne o comportamento padrão de redirecionamento do formulário
        event.preventDefault()

        // Agupamento dos campos do formulário
        const formData: IEmployee = {
            name,
            cpf,
            rawSalary,
            discount,
            dependents,
        }

        // Validação dos dados do Formulário
        if (!validateForm(formData)) {
            alert('Ops! Preencha todos os campos')
            return
        }

        // Callback da persistencia dos dados
        props.onHandleSubmit(formData)
        // Limpa os campos do formulário
        resetForm()
    }

    return (
        <FormSCP onSubmit={handleSubmit}>

            <div className="input-block">
                <label htmlFor="name">Nome:</label>
                <input id="name" maxLength={255} value={name} onChange={(event) => setName(event.target.value)} autoFocus required />
            </div>

            <div className="input-block">
                <label htmlFor="cpf">CPF:</label>
                <input id="cpf" maxLength={11} value={cpf} onChange={(event) => setCpf(event.target.value)} required />
            </div>

            <div className="input-block">
                <label htmlFor="rawSalary">Salário Bruto:</label>
                <input id="rawSalary" value={rawSalary} min={0} onChange={(event) => setRawSalary(+event.target.value)} required />
            </div>

            <div className="input-block">
                <label htmlFor="discount">Desconto da Previdência:</label>
                <input type='number' id="discount" value={discount} min={0} onChange={(event) => setDiscount(+event.target.value)} required />
            </div>

            <div className="input-block">
                <label htmlFor="dependents">Número de Dependentes:</label>
                <input type='number' id="dependents" value={dependents} min={0} onChange={(event) => setDependents(+event.target.value)} required />
            </div>

            <button className="confirm-button" type="submit">
                Salvar
            </button>

        </FormSCP >
    )
}

export default CreateEmployeeFormCP

const FormSCP = styled.form`

    .input-block {
        margin-top: 10%;
    }

    .input-block label {
        color:#333333;
        margin-bottom: 8px;
    }

    .input-block input{
        width: 100%;
        height: 30px;

        background: #fcfcfc;
        border: 1px solid #e2e2e2;

        border-radius: 5px;
        outline: none;
        color: #333333;
        padding: 0 16px;
    }

    button {
        margin-top: 48px;
        width: 100%;
        height: 48px;
        cursor: pointer;
        
        border: 0;
        background: #5C8599;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        color: #FFFFFF;
        font-size: large;
        font-weight: 800;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: background-color 0.2s;
    }

    button:hover {
        background: #8FA7B3;
    }

`
