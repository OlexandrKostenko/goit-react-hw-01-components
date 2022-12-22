import PropTypes from 'prop-types';
import { Item, IsOnlineSpan, FriendAvatar, FriendName } from './FriendListItem.styled';



const FriendListItem = ({avatar, name, isOnline}) => {
  return (
<Item>
  <IsOnlineSpan OnlineStatus={isOnline}>{isOnline}</IsOnlineSpan>
  <FriendAvatar src={avatar} alt="User avatar" width="48" />
  <FriendName>{name}</FriendName>
</Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;

