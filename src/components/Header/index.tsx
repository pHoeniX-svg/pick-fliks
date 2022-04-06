import { To } from 'react-router-dom';
import { Background, ButtonLink, Container, Logo, LogoLink } from './styles';

type HeaderProps = React.PropsWithChildren<{
  bg?: boolean;
  className?: string;
  to?: To;
  alt?: string;
  src?: string;
}>;

export const Header = ({ bg = true, children, ...rest }: HeaderProps) => {
  return bg ? <Background {...rest}>{children}</Background> : <>{children}</>;
};

Header.Frame = function HeaderFrame({ children, ...rest }: HeaderProps) {
  return <Container {...rest}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...rest }: HeaderProps) {
  return (
    <LogoLink to={to || '/'} {...rest}>
      <Logo {...rest} />
    </LogoLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({
  children,
  ...rest
}: HeaderProps) {
  return (
    <ButtonLink as="a" {...rest}>
      {children}
    </ButtonLink>
  );
};

// Header.Group = function HeaderGroup({ children, ...rest }: HeaderProps) {
//   return <Group {...rest}>{children}</Group>;
// };

// Header.Search = function HeaderSearch({
//   searchTerm,
//   setSearchTerm,
//   ...rest
// }) {
//   const [searchActive, setSearchActive] = useState(false);

//   return (
//     <Search {...rest}>
//       <SearchIcon
//         onClick={() => setSearchActive((searchActive) => !searchActive)}
//         data-testid="search-click"
//       >
//         <img src="/images/icons/search.png" alt="Search" />
//       </SearchIcon>
//       <SearchInput
//         value={searchTerm}
//         onChange={({ target }) => setSearchTerm(target.value)}
//         placeholder="Search films and series"
//         active={searchActive}
//         data-testid="search-input"
//       />
//     </Search>
//   );
// };

// Header.Profile = function HeaderProfile({ children, ...rest }: HeaderProps) {
//   return <Profile {...rest}>{children}</Profile>;
// };

// Header.Feature = function HeaderFeature({ children, ...rest }: HeaderProps) {
//   return <Feature>{children}</Feature>;
// };

// Header.Picture = function HeaderPicture({ src, ...rest }: HeaderProps) {
//   return <Picture {...rest} src={`/images/users/${src}.png`} />;
// };

// Header.Dropdown = function HeaderDropdown({ children, ...rest }: HeaderProps) {
//   return <Dropdown {...rest}>{children}</Dropdown>;
// };

// Header.TextLink = function HeaderTextLink({ children, ...rest }: HeaderProps) {
//   return <Link {...rest}>{children}</Link>;
// };

// Header.PlayButton = function HeaderPlayButton({ children, ...rest }: HeaderProps) {
//   return <PlayButton {...rest}>{children}</PlayButton>;
// };

// Header.FeatureCallOut = function HeaderFeatureCallOut({
//   children,
//   ...rest
// }) {
//   return <FeatureCallOut {...rest}>{children}</FeatureCallOut>;
// };

// Header.Text = function HeaderText({ children, ...rest }: HeaderProps) {
//   return <Text {...rest}>{children}</Text>;
// };
