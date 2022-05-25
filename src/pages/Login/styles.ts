import styled from 'styled-components'
import photoImg from '../../assets/photo.jpg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;

    .login--img {
        width: 532px;
        height: 100%;

        background: url(${photoImg});
        background-position: center;
        background-size: cover;
        
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            font-size: 3rem;
            font-weight: 700;
            color: #3DA2FF;
        }
    }

    .login--form {
        flex: 1;

        display: flex;
        justify-content: center;
        align-items: center;

        form {
            display: flex;
            flex-direction: column;
            justify-content: center;

            label {
                margin-bottom: 5px;
            }

            label, input {
                font-size: 1rem;
                font-weight: 700;
                color: #818181;
            }

            input {
                width: 300px;
                height: 45px;
                border: 1px solid #CFCFCF;
                border-radius: 5px;
                padding: 15px;
                margin-bottom: 30px;

                &::placeholder {
                    color: #c9c9c9;
                }
            }
            
            .login--btn {
                background-color: #3DA2FF;
                height: 45px;

                border: 0;
                border-radius: 5px;

                font-size: 1rem;
                color: #FFF;
                font-weight: 700;

                transition: all ease 0.2s;

                &:hover {
                    filter: brightness(0.9);
                }
            }
        }

    }


`