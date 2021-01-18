import React from "react"
import { Link } from "react-router-dom"
import styled from 'styled-components'

/*
 * Componente de Menu
 */
export default function HeaderCP(): JSX.Element {

    return (
        <HeaderSCP>

            <Link to={'/'}>Registrar Funcionário</Link>
            <Link to={'/tabela'}>Tabela de cáculos do IRRF</Link>

        </HeaderSCP>
    )
}

const HeaderSCP = styled.header`
    width: 100vw;
    height: 150px;
    position: absolute;
    left: 0px;
    top: 0px;
    
    color: #ffffff;
    background: #333333;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    a {
        color: #FFF;
        font-family: Inter;
        font-size: x-large;
        text-decoration: none;
    
        margin: 0 3%;
    }

    a:hover {
        color: #c4c4c4;
    }
`
