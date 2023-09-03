import PropTypes from 'prop-types';
import { Container } from 'components/index.styled';
import {
  StatisticsCard,
  StatsTitle,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <StatisticsCard>
        {title && <StatsTitle>{title}</StatsTitle>}
        <StatsList>
          {stats.map(({ id, label, percentage }) => (
            <StatsItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </StatsItem>
          ))}
        </StatsList>
      </StatisticsCard>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
