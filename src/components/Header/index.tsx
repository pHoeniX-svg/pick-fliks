import { Link as ReactRouterLink, To } from 'react-router-dom';
import { Background, Container, Frame, Logo } from './styles';

type HeaderProps = React.PropsWithChildren<{
  bg?: boolean;
  className?: string;
  to?: To;
}>;

const Header = (props: HeaderProps) => {
  return props?.bg ? (
    <Background {...props}>{props?.children}</Background>
  ) : (
    props?.children
  );
};

Header.Frame = function HeaderFrame(props: HeaderProps) {
  return <Container {...props}>{props?.children}</Container>;
};

Header.Logo = function HeaderLogo(props: HeaderProps) {
  return (
    <ReactRouterLink to={props?.to || '/'} {...props}>
      <Logo {...props} />
    </ReactRouterLink>
  );
};

Header.Frame = function HeaderFrame(props: HeaderProps) {
  return <Frame {...props}>{props?.children}</Frame>;
};
// Header.Frame = function HeaderFrame(props: HeaderProps) {
//   return <Frame {...props}>{props?.children}</Frame>;
// };
// Header.Frame = function HeaderFrame(props: HeaderProps) {
//   return <Frame {...props}>{props?.children}</Frame>;
// };
// Header.Frame = function HeaderFrame(props: HeaderProps) {
//   return <Frame {...props}>{props?.children}</Frame>;
// };

export { Header };
