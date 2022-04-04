/* eslint-disable react/prop-types */
import { Body, Container, Image, Inner, Pane, Title } from './styles';

type JumboProps = {
  direction?: string;
  className?: string;
};

type JumboImgProps = {
  src: string;
  alt: string;
};

const Jumbotron = (props: React.PropsWithChildren<JumboProps>) => {
  return (
    <Inner direction={props?.direction || 'row'} {...props}>
      {props?.children}
    </Inner>
  );
};

Jumbotron.Container = function JumbotronContainer(
  props: React.PropsWithChildren<JumboProps>
) {
  return <Container {...props}>{props?.children}</Container>;
};

Jumbotron.Body = function JumbotronBody(
  props: React.PropsWithChildren<JumboProps>
) {
  return <Body {...props}>{props?.children}</Body>;
};

Jumbotron.Pane = function JumbotronPane(
  props: React.PropsWithChildren<JumboProps>
) {
  return <Pane {...props}>{props?.children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle(
  props: React.PropsWithChildren<JumboProps>
) {
  return <Title {...props}>{props?.children}</Title>;
};

Jumbotron.Image = function JumbotronImage(
  props: React.PropsWithChildren<JumboImgProps>
) {
  return <Image {...props} />;
};

export { Jumbotron };
