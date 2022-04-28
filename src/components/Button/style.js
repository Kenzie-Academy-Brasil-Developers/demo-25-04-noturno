import styledComponents from "styled-components"

export const Container = styledComponents.button`
border-radius: 4px;
border: none;
margin-left: 6px;
background-color: #F44;
color: #EEE;
cursor: pointer;

&:hover {
    border: 1px solid #AAA;
}

`