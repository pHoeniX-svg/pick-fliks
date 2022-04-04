import { createContext, useState } from 'react';
import { GlobalContainer } from '~src/globals';
import { useAccordion } from '~src/hooks';
import { Body, Container, Frame, Header, Item, Title } from './style';

type AccordionState = boolean;
type AccordionDispatch = React.Dispatch<React.SetStateAction<boolean>>;
type AccordionContextProps = {
  isOpen: AccordionState;
  setIsOpen: AccordionDispatch;
};
type AccordionProps = React.PropsWithChildren<{
  direction?: string;
  className?: string;
  href?: string;
}>;

const AccordionContext = createContext<AccordionContextProps | null>(null);

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
  const [isOpen, setIsOpen] = useState<AccordionState>(false);

  return (
    <AccordionContext.Provider value={{ isOpen, setIsOpen }}>
      <Item {...props}>{props?.children}</Item>
    </AccordionContext.Provider>
  );
};

Accordion.Header = function AccordionHeader(props: AccordionProps) {
  const { setIsOpen } = useAccordion();

  return (
    <Header onClick={() => setIsOpen((prev) => !prev)} {...props}>
      {props?.children}
    </Header>
  );
};

Accordion.Title = function AccordionTitle(props: AccordionProps) {
  return <Title {...props}>{props?.children}</Title>;
};

Accordion.Body = function AccordionBody(props: AccordionProps) {
  const { isOpen } = useAccordion();
  return isOpen ? <Body {...props}>{props?.children}</Body> : null;
};

export { Accordion, AccordionContext };
