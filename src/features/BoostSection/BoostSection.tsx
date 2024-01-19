import styled from 'styled-components';
import Button from '../../ui/Button';
import bgImagesDesktop from '../../assets/images/bg-boost-desktop.svg';
import bgImagesMobile from '../../assets/images/bg-boost-mobile.svg';

function BoostSection() {
  return (
    <BoostSectionStyles>
      <FlexWrapper>
        <h2>Boost your links today</h2>
        <Button size="large" variation="primary" roundedtype="roundedAll">
          Get Started
        </Button>
      </FlexWrapper>
    </BoostSectionStyles>
  );
}

export default BoostSection;

const BoostSectionStyles = styled.section`
  position: relative;
  background: var(--color-primary-2) url(${bgImagesMobile}) no-repeat center;
  background-size: cover;
  height: 25rem;

  & h2 {
    color: #fff;
    text-align: center;
  }

  & ${Button} {
    display: block;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    background: var(--color-primary-2) url(${bgImagesDesktop}) no-repeat center;
    background-size: cover;
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: inherit;
`;
