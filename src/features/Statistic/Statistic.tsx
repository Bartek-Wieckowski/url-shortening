import styled from 'styled-components';
import { statsData } from './statistic-data';
import Card from '../../ui/Card';
import Container from '../../ui/Container';

function Statistic() {
  return (
    <StatisticSectionStyles>
      <Container>
        <h2 className="stat-title">Advanced Statistics</h2>
        <p className="stat-desc">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <CardWrapper>
          {statsData.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </CardWrapper>
      </Container>
    </StatisticSectionStyles>
  );
}

export default Statistic;

const StatisticSectionStyles = styled.section`
  position: relative;
  background-color: var(--color-setion-bg);
  padding-bottom: 2rem;

  & .stat-title,
  .stat-desc {
    text-align: center;
  }
  & .stat-desc {
    max-width: 525px;
    margin: 0 auto;
    color: var(--color-neutral-2);
  }
`;

const CardWrapper = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 12rem;

  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 400px;
    gap: 2rem;
  }
`;
