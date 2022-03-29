import styled from "styled-components"

export const HelpPage = styled.main`
    color: ${({theme}) => theme.colors.green};

    &::-webkit-scrollbar {
        width: 10px;
    }
    &::-webkit-scrollbar-track {
        background-color: black;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.colors.green};
    }

    div {
        display: flex;
        align-items: center;
        a {
            font-size: 3em;
            color: ${({theme}) => theme.colors.green};
            width: 10%;
        }

        h1 {
            width: 80%;
        }
    }
    p {
        width: 70%;
        margin: auto;
        font-size: 1.25em;
    }
    section {
        ol {
            li {
                text-align: left;
            }
        
        }
    }

`