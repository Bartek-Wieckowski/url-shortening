import styled from 'styled-components';
import Navigation from '../../ui/Navigation';
import Container from '../../ui/Container';

function Header() {
  return (
    <HeaderStyle>
      <Container>
        <Navigation />
      </Container>
    </HeaderStyle>
  );
}

export default Header;

const HeaderStyle = styled.header`
  padding: 1.5rem 0;
`;
