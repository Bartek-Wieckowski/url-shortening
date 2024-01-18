import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: unset;
    justify-content: space-between;
  }
`;

export default Row;
