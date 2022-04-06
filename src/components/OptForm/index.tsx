import { GlobalContainer } from '~src/globals';
import { Break, Button, Container, Input, Text } from './styles';

type OptFormProps = React.PropsWithChildren<{
  className?: string;
  placeholder?: string;
}>;

const OptForm = (props: OptFormProps) => {
  return (
    <Container {...props}>
      <GlobalContainer as="form" className="wrapper">
        {props?.children}
      </GlobalContainer>
    </Container>
  );
};

OptForm.Input = function OptFormInput(props: OptFormProps) {
  return <Input {...props} />;
};

OptForm.Button = function OptFormButton(props: OptFormProps) {
  return (
    <Button {...props}>
      {props?.children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText(props: OptFormProps) {
  return <Text {...props}>{props?.children}</Text>;
};

OptForm.Break = function OptFormBreak(props: OptFormProps) {
  return <Break {...props} />;
};

export { OptForm };
