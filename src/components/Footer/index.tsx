import { GlobalContainer } from '~src/globals';
import { Break, Column, Container, Link, Row, Text, Title } from './style';

type FootProps = React.PropsWithChildren<{
  direction?: string;
  className?: string;
  href?: string;
}>;

const Footer = (props: FootProps) => {
  return (
    <Container {...props}>
      <GlobalContainer className="wrapper">{props?.children}</GlobalContainer>
    </Container>
  );
};

Footer.Row = function FooterRow(props: FootProps) {
  return <Row {...props}>{props?.children}</Row>;
};
Footer.Column = function FooterColumn(props: FootProps) {
  return <Column {...props}>{props?.children}</Column>;
};

Footer.Link = function FooterLink(props: FootProps) {
  return <Link {...props}>{props?.children}</Link>;
};

Footer.Title = function FooterTitle(props: FootProps) {
  return <Title {...props}>{props?.children}</Title>;
};

Footer.Text = function FooterText(props: FootProps) {
  return <Text {...props}>{props?.children}</Text>;
};
Footer.Break = function FooterBreak(props: FootProps) {
  return <Break {...props}>{props?.children}</Break>;
};

export { Footer };
