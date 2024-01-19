import styled from 'styled-components';
import FooterDetails from '../../ui/FooterDetails';

function Footer() {
  return (
    <FooterStyles>
      <FooterDetails />
    </FooterStyles>
  );
}

export default Footer;

const FooterStyles = styled.footer`
  background-color: var(--color-neutral-4);
  padding: 4rem 0 5rem;
`;
