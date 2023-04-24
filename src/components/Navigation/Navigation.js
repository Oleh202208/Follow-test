import { useLocation } from 'react-router-dom';
import {
  NavContainer,
  LogLinck,
  NavigationLinck,
  List,
  LogImg,
} from './Navigation.styled.jsx';
export const Navigation = () => {
  const location = useLocation();

  const Logo = () => {
    const value = window.devicePixelRatio;
    return value > 1
      ? require('../../images/logo.png')
      : require('../../images/logo@2x.png');
  };

  return (
    <NavContainer>
      <LogLinck to="/">
        <LogImg src={Logo()} alt="logo" />
      </LogLinck>
      <List>
        <li>
          <NavigationLinck to="/">Home</NavigationLinck>
        </li>
        <li>
          <NavigationLinck to="/tweets" state={{ from: location }}>
            Tweets
          </NavigationLinck>
        </li>
      </List>
    </NavContainer>
  );
};
