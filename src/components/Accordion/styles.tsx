import styled from 'styled-components';

const Container = styled.section`
  --bg: hsl(0, 0%, 19%);

  display: flex;
  margin-inline: auto;
  padding-block: var(--section-padding);
  border-bottom: var(--border-primary);
  color: var(--clr-primary);
`;

const Frame = styled.div``;

const Item = styled.article`
  max-width: 54rem;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin-bottom: 4rem;
  font-size: 4rem;
  text-align: center;
  line-height: 1.1;
`;

const Header = styled.h4`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.1rem;
  padding: 2rem 2.4rem;
  background-color: var(--bg);
  font-size: 2rem;
  font-weight: var(--fw-400);
  user-select: none;
  cursor: pointer;

  img {
    width: 2rem;
    filter: brightness(0) invert(1);
  }
`;

const Body = styled.p`
  max-height: 120rem;
  padding: 2rem 2.4rem;
  background-color: var(--bg);
  font-size: 2rem;
  line-height: normal;
  white-space: pre-wrap;
  user-select: none;
  transition: max-height 800ms ease-in-out;
`;

export { Container, Item, Title, Body, Frame, Header };
