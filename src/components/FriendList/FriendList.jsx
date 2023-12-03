import PropTypes from 'prop-types';

import { FriendsList } from "./FriendsList.stayled"
import { FriendsItem } from "./FriendsItem.stayled"
import { FriendsStatus} from "./FriendsStatus.stayled"

const FriendList = ({friends}) => {
    return (
        <FriendsList>

        {friends.map((item) => <FriendsItem key={item.id}>
            <FriendsStatus $status={item.isOnline.toString()}></FriendsStatus>
            <img src={item.avatar} alt="User avatar" width="48" />
            <p>{item.name}</p>
        </FriendsItem>)}
    </FriendsList>)
};


FriendList.propTypes = {
    friends: PropTypes.array,
}

export default FriendList;