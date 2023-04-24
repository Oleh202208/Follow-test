import { StyledBtn } from '../../components/Button/Button.styled';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 15px;
`;

export const LoadMoreBtn = styled(StyledBtn)`
  display: block;
  margin: 0 auto;
`;

export const BackLink = styled(StyledBtn)`
  display: flex;
  align-items: center;
  width: 140px;

  color: #373737;
  text-align: center;
`;
