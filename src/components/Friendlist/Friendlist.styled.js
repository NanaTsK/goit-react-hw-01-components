import { styled } from 'styled-components';

export const FriendsCard = styled.ul`
  //   width: 300px;
  //   margin-bottom: 100px;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FriendsItem = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:not(:first-child) {
    border-top: 2px solid rgba(255, 255, 255, 0.5);
  }
`;

export const FriendsStatus = styled('span')(({ $isOnline }) => {
  return {
    backgroundColor: $isOnline ? '#adff2f' : '#CBD2D8',
    borderRadius: '50%',
    width: '10px',
    height: '10px',
  };
});

export const IconAvatarFriend = styled.img`
  margin-left: 20px;
  width: 48px;
`;
export const NameFriend = styled.p`
  margin-left: 20px;
  font-size: 20px;
`;
