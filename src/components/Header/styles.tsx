import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.header``;
const Container = styled.nav`
  max-width: var(--max-width, 130rem);
  margin-inline: auto;
  padding-block: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 84em) {
    padding-inline: var(--spacer, 2em);
  }
`;

const A = styled(ReactRouterLink)`
  display: flex;
  text-decoration: none;
  cursor: pointer;
`;

const LogoLink = styled(A)``;

const Logo = styled.img`
  width: 10.8rem;
  margin-right: 4rem;
  aspect-ratio: 16 / 9;
`;

const ButtonLink = styled(A)`
  padding: 0.8rem 2rem;
  border-radius: 0.4rem;
  color: var(--clr-primary);
  background-color: var(--link-normal);

  &:hover {
    background-color: var(--link-hover);
  }
`;

export { Container, Background, LogoLink, Logo, ButtonLink };
