import styled from 'styled-components';

const ListItem = styled('li')`
display: flex;
align-items: center;
column-gap:15px;
border-radius: 15px;
padding: 20px;
border: 2px solid rgba(79, 46, 232, 0.40);
background: #FFF;
font-size:18px;
font-weight: 500;
`

const FriendsStatus = styled('span')`
width: 15px;
height: 15px;
border-radius: 50%;
background-color: ${({$status}) => ($status === "true" ? "green" : "red")};
`

export {FriendsStatus, ListItem };