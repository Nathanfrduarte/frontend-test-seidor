import React from "react"
import styled from 'styled-components'

interface ITextCPProps {
    text: string
    size?: number
    color?: string
    align?: 'center' | 'justify'
}

/*
 * Componente de Texto
 */
function TextCP(props: ITextCPProps): JSX.Element {

    return (
        <TextSCP
            size={props.size}
            color={props.color}
            align={props.align}
        >
            {props.text}
        </TextSCP>
    )
}

export default TextCP

const TextSCP = styled.div<{ size?: number; color?: string; align?: string }>`
    font-size: ${props => !!props.size ? props.size : '24px'};
    color: ${props => !!props.size ? props.size : '#000000'};
    text-align: ${props => !!props.align ? props.align : 'center'};
`