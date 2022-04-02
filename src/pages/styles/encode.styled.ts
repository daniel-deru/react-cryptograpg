import styled from "styled-components"

export const EncodePage = styled.section`
    color: ${({theme}) => theme.colors.green};

    main {
        .input-container {
            display: flex;
            justify-content: space-evenly;
            /* margin-top: 4rem; */

            div {
                font-size: 2em;
                display: flex;
                flex-direction: column;
                width: 40%;

                input {
                    background-color: black;
                    color: ${({theme}) => theme.colors.green};
                    font-family: ${({theme}) => theme.fonts.retro};
                    font-size: 0.75em;
                    border-radius: 5px;
                    border: 2px dashed ${({theme}) => theme.colors.darkGreen};
                    outline: none;
                    padding: 5px;
                    width: 100%;
                    &:focus {
                        border: 2px dashed ${({theme}) => theme.colors.green};
                    }
                }

                textarea {
                    position: relative;
                    width: 40vw;
                    max-width: 40vw;
                    min-width: 40vw;
                    max-height: 50vh;
                    min-height: calc(0.75em + 18px);
                    background-color: black;
                    color: ${({theme}) => theme.colors.green};
                    font-family: ${({theme}) => theme.fonts.retro};
                    font-size: 0.75em;
                    border-radius: 5px;
                    border: 2px dashed ${({theme}) => theme.colors.darkGreen};
                    outline: none;
                    padding: 5px;
                    width: 100%;
                    &:focus {
                        border: 2px dashed ${({theme}) => theme.colors.green};
                    }

                } 
            }
        }

        button {
            background-color: black;
            color: ${({theme}) => theme.colors.green};
            font-family: ${({theme}) => theme.fonts.retro};
            margin: 2rem;
            font-size: 1em;
            padding: 5px 30px;
            border: 2px inset ${({theme}) => theme.colors.green};
            cursor: pointer;
            border-radius: 5px;

            &:active {
                border: 2px outset ${({theme}) => theme.colors.green};
            }
        }
        
    }

    .output {
        width: 90vw;
        margin: 2rem auto;
    }

    

`