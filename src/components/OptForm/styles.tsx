import styled from 'styled-components';

const Container = styled.section`
  --section-padding: 2rem;

  & > form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding-block-start: var(--section-padding);

    @media (min-width: 45em) {
      align-items: initial;
      flex-direction: row;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  max-width: 45rem;
  min-height: 7rem;
  padding: 1rem;
  border: 0;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  min-height: 5rem;
  margin-top: 2rem;
  padding-inline: 3.2rem;
  border: 0;
  color: var(--clr-primary);
  background-color: var(--link-normal);
  font-size: 1.6rem;
  font-weight: var(--fw-700);
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: var(--link-hover);
  }

  @media (min-width: 45em) {
    min-height: 100%;
    margin: 0;
    font-size: 2.4rem;
  }

  img {
    width: 1.6rem;
    margin-left: 1rem;
    filter: brightness(0) invert(1);

    @media (min-width: 45em) {
      width: 2.2rem;
    }
  }
`;

const Text = styled.p`
  margin-top: 1em;
  font-size: 1.6rem;
  text-align: center;

  @media (min-width: 45em) {
    font-size: 1.92rem;
    text-align: initial;
  }
`;

const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export { Container, Input, Button, Text, Break };
