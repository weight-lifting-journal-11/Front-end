import styled from 'styled-components';

export const StyledJournalCard = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    
    .workout {
        width: 45%;
        border-bottom: dashed 2px black;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        a {
            text-decoration: none;

            h4 {
                color: #007343;
            }
        }
        
        p {
            color: #00A35E;
            font-size: 1.2rem;
        }
    }

    .buttons-container {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
    }
    button {
        font-size: 1rem;
        margin: .5rem;
        width: 100px;
        padding: .25rem .5rem;
        border-radius: .5rem;
        border: solid #00A35E 2px;
        background: #FFFFFF;
        color: #00A35E;

        &:hover {
            color: #FFFFFF;
            background: #00A35E;
    }
`;