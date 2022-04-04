import styled from 'styled-components';

type InnnerProps = {
  direction: string;
};

export type Props<T> = {
  item: T;
  onClick: (item: T) => void;
};

const Inner = styled.article<InnnerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 3rem;

  & > * {
    flex: 1;
  }

  @media (min-width: 45em) {
    flex-direction: ${({ direction }) => direction};
  }
`;

const Pane = styled.div`
  text-align: center;

  @media (min-width: 45em) {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 4.2rem;
  line-height: 1.1;
`;

const Body = styled.p`
  font-size: 2.2rem;
  line-height: normal;
`;

const Image = styled.img`
  object-fit: cover;
`;

const Container = styled.section`
  & > .wrapper {
    padding-block: var(--section-padding);
    border-bottom: 0.8rem solid #222;
    color: var(--clr-primary);

    &:last-of-type ${Body} {
      margin-bottom: 4rem;
    }
  }
`;

export { Container, Inner, Pane, Title, Body, Image };
