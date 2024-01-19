import styled from 'styled-components';
import FooterLogo from '../features/Footer/FooterLogo';
import Container from './Container';
import { footerData } from '../features/Footer/footer-data';
import fb from '../assets/images/icon-facebook.svg';
import pin from '../assets/images/icon-pinterest.svg';
import tw from '../assets/images/icon-twitter.svg';
import ig from '../assets/images/icon-instagram.svg';

function FooterDetails() {
  return (
    <Container>
      <FooterContent>
        <FooterLogo />
        <FooterListsWrapper>
          {footerData.map((item, index) => (
            <ul key={index}>
              <p>{item.category}</p>
              <li>{item.link1}</li>
              <li>{item.link2}</li>
              <li>{item.link3}</li>
              {item.link4 && <li>{item.link4}</li>}
            </ul>
          ))}
        </FooterListsWrapper>
        <FooterSocialIcons>
          <img src={fb} alt="" />
          <img src={pin} alt="" />
          <img src={tw} alt="" />
          <img src={ig} alt="" />
        </FooterSocialIcons>
      </FooterContent>
    </Container>
  );
}

export default FooterDetails;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    gap: unset;
  }
`;

const FooterListsWrapper = styled.div`
  flex-grow: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: var(--color-neutral-1);
  & p {
    color: #fff;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  & ul {
    display: flex;
    flex-direction: column;
    & li {
      margin-bottom: 1rem;
      &:hover {
        cursor: pointer;
        color: var(--color-primary-1);
      }
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
  @media (min-width: 992px) {
    gap: 8rem;
  }
`;

const FooterSocialIcons = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
`;
