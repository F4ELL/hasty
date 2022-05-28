import styled from 'styled-components'

export const Container = styled.form`
    
    color: #818181;
    font-weight: 700;

    h2 {
        font-size: 0.8rem;
        margin-bottom: 2rem;        
    }

    input {
        width: 100%;
        padding: 0 1rem;
        height: 3rem;
        border-radius: 5px;

        border: 1px solid #CFCFCF;
        margin-bottom: 15px;

        font-size: 0.8rem;
        font-weight: 700;
        color: #818181;

        &::placeholder {
            font-weight: 700;
        }

    }

    label {
        font-size: 0.8rem;
    }

    button {
        width: 150px;
        height: 46px;

        background-color: #3DA2FF;
        border: 0;
        border-radius: 5px;

        color: #FFF;
        font-weight: 700;
        font-size: 0.8;

        display: block;
        margin: 50px auto 20px auto;
    }

`