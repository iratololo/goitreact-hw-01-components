import PropTypes from 'prop-types';

import FriendListItem from "../FriendListItem/FriendListItem"

import { FriendsList } from "./FriendsList.stayled"

const FriendList = ({ friends }) => {
    return (
        <FriendsList>
            {friends.map(({ id, isOnline, avatar, name }) => <FriendListItem key={id} isOnline={isOnline.toString()} avatar={avatar} name={name} />)}
        </FriendsList>)
};


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FriendList;