import PropTypes from 'prop-types';

import {Description, ProfileContainer, UserInfo, UserName, UserPhoto, UserStat, UserStatItem, UserStatLabel, UserStatQuantity } from "./Profile.stayled"



const Profile = ({ avatar, username, tag, location, stats: {followers, views, likes} }) => {
    return (
      <ProfileContainer>
  <Description>
    <UserPhoto
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <UserInfo>@{tag}</UserInfo>
    <UserInfo>{location}</UserInfo>
  </Description>

  <UserStat>
    <UserStatItem>
      <UserStatLabel>Followers </UserStatLabel>
      <UserStatQuantity>{followers}</UserStatQuantity>
    </UserStatItem>
    <UserStatItem>
      <UserStatLabel>Views </UserStatLabel>
      <UserStatQuantity>{views}</UserStatQuantity>
    </UserStatItem>
    <UserStatItem>
      <UserStatLabel>Likes </UserStatLabel>
      <UserStatQuantity>{likes}</UserStatQuantity>
    </UserStatItem>
  </UserStat>
</ProfileContainer>
  );
};


Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default Profile;
