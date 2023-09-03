import PropTypes from 'prop-types';
import { Container } from 'components/index.styled';
import {
  ProfileCard,
  PhotoCard,
  Photo,
  Name,
  Tag,
  Location,
  StatsCard,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <Container>
      <ProfileCard>
        <PhotoCard>
          <Photo src={avatar} alt={username} />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </PhotoCard>
        <StatsCard>
          <StatsItem>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </StatsItem>
        </StatsCard>
      </ProfileCard>
    </Container>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
