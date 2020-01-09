import styled from 'styled-components';

export const StyledNav = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70px;
    background-color: #67E6A1;

    .logo-container {
        display: flex;
        justify-content: flex-start;
        width: 20%;

    }
    .link-container {
        display: flex;
        justify-content: flex-end;
        width: 80%;
        
        a {
            text-decoration: none;
            color: #161D18;
            padding: 0 10px;
            color: #161D18

            p {
                font-size: 1.5rem;
            }
        }
        
    }

`;