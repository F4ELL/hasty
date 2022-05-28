import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 76px;
    padding: 0 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #CFCFCF;

    h1 {
        font-size: 1rem;
    }

    button { 
        background: #3DA2FF;
        font-size: 0.75rem;
        font-weight: 700;
        color: #FFF;

        width: 140px;
        height: 40px;

        border: 0;
        border-radius: 5px;
    }
`