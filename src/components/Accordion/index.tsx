import { createContext, useState } from 'react';
import { GlobalContainer } from '~src/globals';
import { useAccordion } from '~src/hooks';
import { Body, Container, Frame, Header, Item, Title } from './styles';

type AccordionState = boolean;
type AccordionDispatch = React.Dispatch<React.SetStateAction<boolean>>;
type AccordionContextProps = {
  isOpen: AccordionState;
  setIsOpen: AccordionDispatch;
};
type AccordionProps = React.PropsWithChildren<{
  className?: string;
  href?: string;
}>;

const AccordionContext = createContext<AccordionContextProps | undefined>(
  undefined
);

export const AccordionProvider = (props: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<AccordionState>(false);

  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
      {props?.children}
    </AccordionContext.Provider>
  );
};

const Accordion = (props: AccordionProps) => {
  return (
    <Container {...props}>
      <GlobalContainer className="wrapper">{props?.children}</GlobalContainer>
    </Container>
  );
};

Accordion.Frame = function AccordionFrame(props: AccordionProps) {
  return <Frame {...props}>{props?.children}</Frame>;
};

Accordion.Item = function AccordionItem(props: AccordionProps) {
  return <Item {...props}>{props?.children}</Item>;
};

Accordion.Title = function AccordionTitle(props: AccordionProps) {
  return <Title {...props}>{props?.children}</Title>;
};

Accordion.Header = function AccordionHeader(props: AccordionProps) {
  const { isOpen, setIsOpen } = useAccordion();

  return (
    <Header onClick={() => setIsOpen((prev) => !prev)} {...props}>
      {props?.children}
      {isOpen ? (
        <img src="/images/icons/close-slim.png" alt="close" />
      ) : (
        <img src="/images/icons/add.png" alt="open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody(props: AccordionProps) {
  const { isOpen } = useAccordion();
  return isOpen ? <Body {...props}>{props?.children}</Body> : null;
};

export { Accordion, AccordionContext };
