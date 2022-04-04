/* eslint-disable react/prop-types */
import { GlobalContainer } from '~src/globals';
import { Body, Container, Image, Inner, Pane, Title } from './styles';

type JumboProps = React.PropsWithChildren<{
  direction?: string;
  className?: string;
}>;
type JumboImgProps = React.PropsWithChildren<{
  src: string;
  alt: string;
}>;

const Jumbotron = (props: JumboProps) => {
  return (
    <GlobalContainer className="item" {...props}>
      <Inner direction={props?.direction || 'row'}>{props?.children}</Inner>
    </GlobalContainer>
  );
};

Jumbotron.Container = function JumbotronContainer(props: JumboProps) {
  return <Container {...props}>{props?.children}</Container>;
};

Jumbotron.Body = function JumbotronBody(props: JumboProps) {
  return <Body {...props}>{props?.children}</Body>;
};

Jumbotron.Pane = function JumbotronPane(props: JumboProps) {
  return <Pane {...props}>{props?.children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle(props: JumboProps) {
  return <Title {...props}>{props?.children}</Title>;
};

Jumbotron.Image = function JumbotronImage(props: JumboImgProps) {
  return <Image {...props} />;
};

export { Jumbotron };
