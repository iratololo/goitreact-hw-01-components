import styled from 'styled-components';

const Description = styled('div')`
background-color: #fff;
padding: 30px;
text-align: center;`

const ProfileContainer = styled('div')`
max-width:800px;
min-width: 400px;
border-radius: 15px;
box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.16), 0px 1px 6px 0px rgba(46, 47, 66, 0.08);
overflow:hidden;
`

const UserInfo = styled('p')`
line-height: 1.5;
color: rgba(0, 0, 0, 0.60);
font-size: 18px;`

const UserName = styled('p')`
line-height: 1.5;
color: #4F2EE8;
font-size: 24px;
font-weight: 700;`

const UserPhoto = styled('img')`
width: 100px;
height: 100px;
border-radius: 50%;
border: 3px solid #4F2EE8;`

const UserStat = styled('ul')`
display: flex;
align-items: center;
justify-content: center;
background: #F6F6F6;
border-top: 2px solid gray;
:last-child {
border-right: none;
} 
`
const UserStatItem = styled('li')`
flex-basis: calc(100%/3);
height: 100%;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 10px;
border-right: 2px solid gray;
`
const UserStatLabel = styled('span')`
text-align: center;
line-height: 1.5;
color: rgba(0, 0, 0, 0.60);
font-size: 16px;`

const UserStatQuantity = styled('span')`
text-align: center;
line-height: 1.5;
color: #111;
font-size: 20px;
font-weight:700;`

export {Description, ProfileContainer, UserInfo, UserName, UserPhoto, UserStat, UserStatItem, UserStatLabel, UserStatQuantity };