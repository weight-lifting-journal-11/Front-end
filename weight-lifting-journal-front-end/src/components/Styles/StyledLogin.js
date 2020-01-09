import styled from 'styled-components';

export const StyledLogin = styled.div`
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        height: 200px;
        box-shadow: 10px 10px 5px grey;
        width: 40%;
        background: #FAFAFA;
        padding: 20px;

        input {
            width: 50%;
            height: 30px;
            font-size: inherit;
        }
        button {
            font-size: 1rem;
            width: 100px;
            padding: .5rem 1rem;
            border-radius: .5rem;
            border: solid #00A35E 2px;
            background: #FFFFFF;
            color: #00A35E;

        &:hover {
            color: #FFFFFF;
            background: #00A35E;
    }
`;