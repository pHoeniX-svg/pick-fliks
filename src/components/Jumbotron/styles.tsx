import styled from 'styled-components';

type InnnerProps = {
  direction: string;
};

export type Props<T> = {
  item: T;
  onClick: (item: T) => void;
};

const Container = styled.section``;

const Inner = styled.article<InnnerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: 110rem;
  margin-inline: auto;

  @media (min-width: 45em) {
    flex-direction: ${({ direction }) => direction};
  }
`;

const Pane = styled.div`
  width: 50%;
`;
const Title = styled.h2`
  font-size: 4.8rem;
  line-height: 1.1;
`;

const Body = styled.p`
  font-size: 2.4rem;
  font-weight: var(--fs-400);
  line-height: normal;
`;
const Image = styled.img``;

export { Container, Inner, Pane, Title, Body, Image };
