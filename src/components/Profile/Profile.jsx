import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { theme } from 'theme';
import { Description, UserAvatar, UserLocation, UserName, UserTag, Stats, ItemStats, LabelSpan, QuantitySpan } from './Profile.styled';

export function Profile ({ username, tag, location, avatar, stats}) {
 return (
  <Box border='1px solid #a19c9c' borderRadius={8} display="flex" flexDirection="column" mx="auto" my={4}>
  <Description>
    <UserAvatar
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </Description>

  <Stats>
    <ItemStats>
      <LabelSpan>Followers</LabelSpan>
      <QuantitySpan>1000</QuantitySpan>
    </ItemStats>
    <ItemStats>
      <LabelSpan>Views</LabelSpan>
      <QuantitySpan>2000</QuantitySpan>
    </ItemStats>
    <ItemStats>
      <LabelSpan>Likes</LabelSpan>
      <QuantitySpan>3000</QuantitySpan>
    </ItemStats>
  </Stats>
</Box>
 )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
}
