import styled from "styled-components"

export const ToggleComponent = styled.div`
    color: ${({theme}) => theme.colors.darkGreen};
    .selected {
        border: 2px dotted ${({theme}) => theme.colors.green};
        color: ${({theme}) => theme.colors.green};
    }

`