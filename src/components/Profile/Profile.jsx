import PropTypes from 'prop-types';
import { ProfileContainer } from "./ProfileContainer.stayled"
import { Description } from "./Description.stayled"
import { UserInfo } from "./UserInfo.stayled"
import { UserName } from "./UserName.stayled"
import { UserPhoto } from "./UserPhoto.stayled"
import { UserStat } from "./UserStat.stayled"
import { UserStatItem } from "./UserStatItem.stayled"
import { UserStatLabel } from "./UserStatLabel.stayled"
import {UserStatQuantity } from "./UserStatQuantity.stayled"



const Profile = ({data}) => {
    const { avatar, username, tag, location, stats: {followers, views, likes} } = data;
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
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
}

export default Profile;
