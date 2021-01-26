import styled from 'styled-components';

export const QuestionBox = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 0px;
    margin: auto 0%;
    @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px
    }
`;
QuestionBox.Header = styled.header`
    font-size: 1.25em;
    padding: 1em;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.secondary}
`;

QuestionBox.Content = styled.div`
    padding: 1em 1.5em;
    width: 100%
    display: flex;

    p{
        font-size: 1.25em;
        
    }
    ul{
        list-style: none;
        padding: 0;
    }
    li{
        padding: 0.5em;
        margin-bottom: 0.4em;
        background-color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.secondary};
        border-radius: 5px;
    }

    button{
        text-align: center;
        background-color: ${({ theme }) => theme.colors.secondary};
        border: none;
        border-radius: 5px;
    }
`;



export default QuestionBox;