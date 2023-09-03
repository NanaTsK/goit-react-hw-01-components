import React from 'react';
import { Container } from 'components/index.styled';
import {
  ProfileCard,
  PhotoCard,
  Photo,
  Name,
  Tag,
  Location,
  StatsCard,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location }) => {
  return (
    <Container>
      <ProfileCard>
        <PhotoCard>
          <Photo src={avatar} alt={username} />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </PhotoCard>
        <StatsCard>{/* Your stats content here */}</StatsCard>
      </ProfileCard>
    </Container>
  );
};
