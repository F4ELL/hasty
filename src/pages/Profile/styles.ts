import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;
    top: 76px;
    left: 240px;

    padding: 30px 60px;

    color: #818181;
    font-size: 0.9rem;
    

    .profile--title {
        margin-bottom: 20px;
    }

    .profile--title strong {
        border-right: 3px solid #818181;
        padding-right: 5px;
    }

    .profile--photo {
        margin-bottom: 15px;

        img {
            width: 140px;
        }
    }

    .profile--info-area {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;

        margin-bottom: 40px;
    }
`

export const InfoItem = styled.div`

    margin-right: 35px;

    p {
        border: 1px solid #CFCFCF;
        width: 320px;
        height: 45px;

        display: flex;
        align-items: center;

        padding: 15px;
        border-radius: 5px;

        margin-top: 3px;
        font-weight: 700;
    }
`