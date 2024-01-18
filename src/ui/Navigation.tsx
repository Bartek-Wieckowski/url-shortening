import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navLinks, userOptionLinks } from '../features/Header/navigation-data';
import { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <NavigationStyle>
      <LogoStyle>
        <img src={Logo} alt="Logo company" />
      </LogoStyle>
      <WrapperLists className={`${isOpen ? 'isOpen' : ''}`}>
        <NavListStyle>
          {navLinks.map((link) => (
            <NavLinkStyle key={link.linkName}>
              <Link to={link.link}>{link.linkName}</Link>
            </NavLinkStyle>
          ))}
        </NavListStyle>
        {isOpen && <hr style={{ margin: '25px auto', width: '80%' }} />}
        <NavListStyle>
          {userOptionLinks.map((userLink) => (
            <NavLinkStyle key={userLink.linkName}>
              <Link className="special-userLink" to={userLink.link}>
                {userLink.linkName}
              </Link>
            </NavLinkStyle>
          ))}
        </NavListStyle>
      </WrapperLists>
      <HamburgerStyle>
        <GiHamburgerMenu onClick={handleClick} />
      </HamburgerStyle>
    </NavigationStyle>
  );
}

export default Navigation;

const NavigationStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoStyle = styled.div`
  margin-right: 3rem;
  & img {
    max-width: unset;
  }
`;

const WrapperLists = styled.div`
  display: none;
  &.isOpen {
    display: flex;
    flex-direction: column;
    width: 80%;

    position: absolute;
    top: 8rem;
    left: 50%;
    transform: translateX(-50%);

    background: var(--color-primary-2);
    color: #fff;
    padding: 2rem 0;
    border-radius: var(--border-radius-sm);
    z-index: 1;

    & ul {
      flex-direction: column;
    }

    & ul:last-of-type {
      width: 250px;
      margin: auto;
      text-align: center;
      gap: 0.5rem;

      & li {
        width: 100%;
        padding: 0 1rem;

        & .special-userLink {
          display: block;
        }
        &:nth-child(1):hover {
          & .special-userLink {
            background-color: transparent;
          }
        }
        &:nth-child(2) {
          & .special-userLink {
            background-color: var(--color-primary-1);
            &:hover {
              background-color: var(--color-btn-hover-1);
            }
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    visibility: visible;
    opacity: 1;
  }
`;

const NavListStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
`;
const NavLinkStyle = styled.li`
  font-size: 1.5rem;
  font-weight: 700;
  & a {
    transition: all 0.3s ease;
  }
  & a:hover {
    color: var(--color-neutral-1);
  }
  & .special-userLink {
    padding: 1.2rem 1.6rem;
    border-radius: var(--border-radius-rounded);
  }
  & .special-userLink:hover {
    background-color: var(--color-btn-hover-1);
    color: #fff;
  }
`;

const HamburgerStyle = styled.div`
  font-size: 3rem;
  color: var(--color-neutral-2);
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;
