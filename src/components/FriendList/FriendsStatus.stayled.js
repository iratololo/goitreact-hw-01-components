import styled from 'styled-components';

export const FriendsStatus = styled('span')`
width: 15px;
height: 15px;
border-radius: 50%;
background-color: ${({$status}) => ($status === "true" ? "green" : "red")};
`