import styled from 'styled-components';

export const StatisticsItem = styled('li')`
flex-basis:100%;
height: 100%;
padding: 15px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 10px;
background-color: ${({ id }) => (id % 2 === 0 ? "#EAC645" : "#4F2EE8")};
color: ${({ id }) => (id % 2 === 0 ? "#111" : "#fff")};
font-weight: 500;
`

