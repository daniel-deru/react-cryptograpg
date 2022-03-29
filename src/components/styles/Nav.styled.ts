import styled from "styled-components"

type Props = {
    show: string
}

export const NavComponent = styled.nav<Props>`
    position: relative;
    margin-right: 100px;
    font-size: 1.5em;
    min-width: 200px;
    background-color: black;
    user-select: none;
    div {
        cursor: pointer;
        border: 2px dashed ${({theme}) => theme.colors.green};
        padding: 10px;
        border-radius: 5px;
        /* width: fit-content; */
    }
    ul {
        background-color: black;
        position: absolute;
        display: ${props => props.show};
        left: 50%;
        transform: translateX(-50%);
        list-style-type: decimal;
        font-size: 1em;

        li {
            border: 2px dashed transparent;
            padding: 10px;
            border-radius: 10px;
            cursor: pointer;
        }

        .selected {
            border: 2px dashed ${({theme}) => theme.colors.green};
        }
    }

`