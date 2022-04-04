import { useContext, useDebugValue } from 'react';
import { AccordionContext } from '~src/components';

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(`useAccordion must be used within a AccordionProvider`);
  }

  const { isOpen, setIsOpen } = context;

  useDebugValue(isOpen, (isOpen) =>
    isOpen ? 'accordion opened' : 'accordion closed'
  );

  return { isOpen, setIsOpen };
}
