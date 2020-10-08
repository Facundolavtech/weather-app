import React from 'react'
import styled from 'styled-components'


export function ErrorForm({ message }) {


    const Error = styled.div`
        width: 90%;
        height: 30px;
        padding: 10px 0;
        margin: auto;
        background-color: darkred;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
    `
    const Message = styled.p`
        margin: auto;
        font-weight: bold;
        font-size: 20px;
        color: #fff;
`


    return (
        <Error>
            <Message>{message}</Message>
        </Error>
    )
}

export function ErrorResultNotFound({message}) {

    const Error = styled.div`
        width: 90%;
        height: 30px;
        padding: 10px 0;
        background-color: darkred;
        margin: 30px auto;
        display: flex;
        align-items: center;
    `
    const Message = styled.p`
        margin: auto;
        font-weight: bold;
        font-size: 20px;
        color: #fff;
    `

    return (
        <Error>
            <Message>{message}</Message>
        </Error>
    )
}
