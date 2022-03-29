import styled from "styled-components"

export const ToggleComponent = styled.div`
    color: ${({theme}) => theme.colors.darkGreen};
    box-sizing: border-box;
    width: fit-content;
   
    
    .selected {
        border: 2px dashed ${({theme}) => theme.colors.green};
        color: ${({theme}) => theme.colors.green};
    }

    span {
        font-size: 1.5em;
        padding: 5px;
        margin: 0px 10px;
        border-radius: 10px;
        border: 2px solid transparent;
        cursor: pointer;
    }

`