import styled from 'styled-components';

const Container = styled.div`
  max-width: 100%;
  padding: 0 1.5rem;

  @media (min-width: 576px) {
    max-width: 768px;
  }

  @media (min-width: 768px) {
    max-width: 992px;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
  }
`;

export default Container;
