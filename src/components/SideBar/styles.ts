import styled from 'styled-components'

export const Container = styled.div`
    height: calc(100vh - 76px);
    width: 100%;
    max-width: 240px;

    border-right: 1px solid #CFCFCF;
    padding: 30px;

    ul {
        list-style: none;
    }

    li {
        & + li  {
		    margin-top: 20px;
	    }
    }


`

export const SideBarItem = styled.div`

    a {
        display: flex;
        align-items: center;
        gap: 15px;

        text-decoration: none;
        color: #818181;

        span {
            font-size: 0.75rem;
            font-weight: 700;
        }
    }
`