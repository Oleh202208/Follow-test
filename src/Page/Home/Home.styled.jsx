import styled from 'styled-components';
import { StyledBtn } from '../../components/Button/Button.styled';

export const Container = styled.div`
  font-size: 80px;
  font-weight: 600;
  background-image: linear-gradient(to left, #0f6b26, #23a5ac);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  text-align: center;
  padding: 30vh 30vw;
`;
export const TweetLink = styled(StyledBtn)`
  display: inline-block;
  width: 200px;
`;
