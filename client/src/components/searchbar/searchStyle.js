import styled from 'styled-components';

export const DivSearch = styled.div`
    padding:1em;
    display:flex;
    justify-content: center;
`

export const Btn = styled.button`
    border-radius: 0.5em;
    margin-left: 1em;
   
    padding: o.5em;
    background-color: #326664;
    color: #FEDCB4;
    font-size:20px;
    &:hover {
        background-color: #324C5E;
        color:#7AD8D7;
        cursor: pointer;
    }
`
export const Input= styled.input`
    background-color: #cce0ff; 

    padding: 10px;
    border-radius: 10px;
    border: 1px solid lightgray;
    transition: background-color 0.3s, color 0.3s;
    font-weight: bold;

`
