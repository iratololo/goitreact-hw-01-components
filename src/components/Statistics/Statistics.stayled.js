import styled from 'styled-components';

const StatisticsItem = styled('li')`
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

const StatisticsLabel = styled('span')`
font-size: 18px;
`

const StatisticsList = styled('ul')`
display: flex;
align-items: center;
justify-content: center;
`
const StatisticsPercent = styled('span')`
font-size: 22px;
`
const StatisticsTitle = styled('h2')`
font-size: 26px;
text-transform: uppercase;
text-align: center;
margin-bottom: 40px;
`

export {StatisticsItem, StatisticsLabel, StatisticsList, StatisticsPercent, StatisticsTitle};