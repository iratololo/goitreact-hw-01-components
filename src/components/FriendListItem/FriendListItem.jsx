import PropTypes from 'prop-types';

import { FriendsStatus, ListItem } from "./FriendListItem.stayled"

const FriendListItem = ({ avatar, isOnline, name }) => {
    return (
        <ListItem>
            <FriendsStatus $status={isOnline}></FriendsStatus>
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </ListItem>
    )
};

FriendListItem.propTypes = {
    isOnline: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}

export default FriendListItem;