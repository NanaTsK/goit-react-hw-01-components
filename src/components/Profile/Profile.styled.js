import { styled } from 'styled-components';

export const ProfileCard = styled.div`
  // xxx
`;
export const PhotoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  align-items: center;
`;
export const Photo = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 20px;
  background-color: #e5e8e8;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
`;
export const Tag = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
`;
export const Location = styled.p`
  font-size: 16px;
  font-weight: 400;
`;
export const StatsCard = styled.ul`
  display: flex;
  gap: 10px;
  border-top: 2px solid rgba(255, 255, 255, 0.5);
  justify-content: center;
  padding-top: 15px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const Label = styled.span`
  // xxx
`;
export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
