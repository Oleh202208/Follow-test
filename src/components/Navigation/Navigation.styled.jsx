import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  padding: 0 15px;
  background-color: #6601c5;
`;

export const LogLinck = styled(Link)`
  display: flex;
  gap: 15px;
  align-items: center;
`;
export const LogImg = styled.img`
  width: 140px;
  height: 80px;
`;

export const List = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
`;
export const NavigationLinck = styled(NavLink)`
  font-family: 'MontserratSemiBold';
  font-size: 26px;
  line-height: 28px;
  color: #ebd8ff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #5cd3a8;
  }

  &.active {
    color: #ebd8ff;
    text-decoration: underline 2px #5cd3a8;
  }
`;
