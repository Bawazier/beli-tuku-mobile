import styled from 'styled-components/native';
import {Header, Body, Container} from 'native-base';

export const StyledHeader = styled(Header)`
  border: none;
  background-color: white;
  padding: 0;
`;

export const StyledBody = styled(Body)`
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
`;

export const StyledTextBody = styled.Text`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  color: #222222;
`;

export const StyledContainer = styled(Container)`
  height: auto;
  background: transparent;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
`;
