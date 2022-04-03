import styled from "styled-components"

export const EncodePage = styled.section`
    color: ${({theme}) => theme.colors.green};
    .control-container {
        button {
            background-color: black;
            border: 2px inset ${({theme}) => theme.colors.green};
            color: ${({theme}) => theme.colors.green};
            margin: 10px;
            font-family: 'DotGothic16', sans-serif;
            padding: 5px 30px;
            font-size: 1em;
            border-radius: 5px;
            cursor: pointer;

            &:active {
                border: 2px outset ${({theme}) => theme.colors.green};
            }
        }  
    }

    .input-container {


        width: 90vw;
        margin: auto;

        div {
            display: flex;
            flex-direction: column;
            font-size: 1.25em;
            margin-top: 1rem;

            input {
                
                background-color: black;
                border: 2px dashed ${({theme}) => theme.colors.green};
                padding: 5px;
                border-radius: 5px;
                outline: none;
                color: ${({theme}) => theme.colors.green};
                font-size: 1em;
                font-family: 'DotGothic16', sans-serif;
            }

            textarea {
                max-width: calc(90vw - 10px);
                min-width: calc(90vw - 10px);
                width: 90vw;
                max-height: 30vh;
                height: 30vh;
                min-height: 30vh;
                background-color: black;
                border: 2px dashed ${({theme}) => theme.colors.green};
                padding: 5px;
                border-radius: 5px;
                outline: none;
                color: ${({theme}) => theme.colors.green};
                font-size: 1em;
                font-family: 'DotGothic16', sans-serif;
            }
        }
    }
        
    

`