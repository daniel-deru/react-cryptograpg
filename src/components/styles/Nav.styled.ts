import styled from "styled-components"

type Props = {
    show: string
}

export const NavComponent = styled.nav<Props>`
    position: relative;
    margin-right: 100px;
    font-size: 2em;
    min-width: 200px;
    div {
        cursor: pointer;
    }
    ul {
        position: absolute;
        display: ${props => props.show};
        left: 50%;
        transform: translateX(-50%);
        list-style-type: decimal;
        font-size: 0.5em;

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