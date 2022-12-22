import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem'
import {FriendsList}  from './FriendsList.styled'; 

function FriendList ({friends}) {
  return (
  <FriendsList>
    {friends.map(({ avatar, name, isOnline, id }) => <FriendListItem
      key={id}
      avatar= {avatar}
      name= {name}
      isOnline={isOnline} />
      )}
  </FriendsList>
  );
    }

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
};

export default FriendList;
