import styled from 'styled-components';

const Container = styled.footer`
  color: var(--clr-secondary);

  & > .wrapper {
    padding-block: var(--section-padding);
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Row = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2rem;
`;

const Link = styled.a`
  font: inherit;
  text-decoration: none;
`;

const Title = styled.h3`
  margin-bottom: 4rem;
  font-size: 1.6rem;
`;

const Text = styled.p``;

const Break = styled.div`
  height: 0;
`;

export { Container, Column, Link, Title, Text, Break, Row };
