import PropTypes from 'prop-types';
import { Container } from 'components/index.styled';
import {
  FriendsCard,
  FriendsItem,
  FriendsStatus,
  IconAvatarFriend,
  NameFriend,
} from './Friendlist.styled';

export const FriendList = ({ friends }) => {
  return (
    <Container>
      <FriendsCard>
        {friends.map(({ id, avatar, name, $isOnline }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={$isOnline}
          />
        ))}
      </FriendsCard>
    </Container>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsItem>
      <FriendsStatus $isOnline={isOnline}></FriendsStatus>
      <IconAvatarFriend src={avatar} alt="User avatar" />
      <NameFriend>{name}</NameFriend>
    </FriendsItem>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
