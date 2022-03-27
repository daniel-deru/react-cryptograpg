import styled from "styled-components"

export const HeaderComponent = styled.header`
    color: ${({theme}) => theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        margin-left: 20px;
    }

    a {
        color: ${({theme}) => theme.colors.green};
        text-decoration: none;
        margin: auto;
        width: 30px;
        height: 30px;
        margin: 0px 20px 0px 0px;
        aspect-ratio: 1/1;
        padding: 10px;
        border-radius: 50%;
        border: 2px dashed ${({theme}) => theme.colors.green};
        font-size: 2em;
        line-height: 30px;
    }
`