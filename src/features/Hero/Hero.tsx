import styled from 'styled-components';
import heroImg from '../../assets/images/illustration-working.svg';

import Container from '../../ui/Container';
import Row from '../../ui/Row';
import Button from '../../ui/Button';

function Hero() {
  return (
    <HeroStyle>
      <HeroImageDesktop />
      <Container>
        <Row>
          <HeroDetails>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button size="large" variation="primary" roundedType="roundedAll">
              Get Started
            </Button>
          </HeroDetails>
          <HeroImageMobile>
            <img src={heroImg} alt="Person which work" />
          </HeroImageMobile>
        </Row>
      </Container>
    </HeroStyle>
  );
}

export default Hero;

const HeroStyle = styled.section`
  position: relative;
  background-color: #fff;
  max-width: 1920px;
  margin: 0 auto;

  & ${Container} {
    overflow-x: hidden;
  }

  @media (min-width: 768px) {
    & ${Row} {
      height: 228px;
    }
  }
  @media (min-width: 992px) {
    & ${Row} {
      height: 428px;
    }
  }
`;

const HeroDetails = styled.div`
  order: 12;
  & h1 {
    text-align: center;
  }
  & p {
    text-align: center;
  }
  & ${Button} {
    display: block;
    margin: 2rem auto 0;
  }
  @media (min-width: 768px) {
    order: 1;

    & h1 {
      max-width: 500px;
      line-height: 1.2;
      text-align: left;
    }
    & p {
      max-width: 450px;
      color: var(--color-neutral-1);
      text-align: left;
    }
    & ${Button} {
      margin: 2rem 0 0 0;
    }
  }
`;
const HeroImageDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    position: absolute;
    right: -2rem;
    top: 0;
    background: url(${heroImg}) no-repeat;
    background-size: contain;
    background-position: right -100px center;

    max-width: 733px;
    width: 100%;
    height: 282px;
  }

  @media (min-width: 992px) {
    background-position: right -210px center;
    height: 482px;
  }

  @media (min-width: 1200px) {
    background-position: right center;
  }
`;
const HeroImageMobile = styled.div`
  order: 1;
  margin-right: -8rem;

  @media (min-width: 768px) {
    display: none;
  }
`;
