import styled from "styled-components"

const BaseMenuItem = styled.li`
    color: ${props => props.theme ? props.theme.color : "mediumseagreen"};
`;

export const MenuStyleItem = styled(BaseMenuItem)`
    margin-bottom: 7px;
    padding-left: 26px;
    list-style: none;
    color: black;
`;