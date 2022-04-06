import { GlobalContainer } from '~src/globals';
import { Break, Column, Container, Link, Row, Text, Title } from './styles';

type FooterProps = React.PropsWithChildren<{
  className?: string;
  href?: string;
}>;

const Footer = (props: FooterProps) => {
  return (
    <Container {...props}>
      <GlobalContainer className="wrapper" as="section">
        {props?.children}
      </GlobalContainer>
    </Container>
  );
};

Footer.Row = function FooterRow(props: FooterProps) {
  return <Row {...props}>{props?.children}</Row>;
};
Footer.Column = function FooterColumn(props: FooterProps) {
  return <Column {...props}>{props?.children}</Column>;
};

Footer.Link = function FooterLink(props: FooterProps) {
  return <Link {...props}>{props?.children}</Link>;
};

Footer.Title = function FooterTitle(props: FooterProps) {
  return <Title {...props}>{props?.children}</Title>;
};

Footer.Text = function FooterText(props: FooterProps) {
  return <Text {...props}>{props?.children}</Text>;
};
Footer.Break = function FooterBreak(props: FooterProps) {
  return <Break {...props}>{props?.children}</Break>;
};

export { Footer };
