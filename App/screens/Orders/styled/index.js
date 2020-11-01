import styled from 'styled-components/native';
import {Content, Container} from 'native-base';

export const StyledText = styled.Text`
  font-weight: bold;
  font-size: 34px;
  color: #222222;
`;

export const StyledContent = styled(Content)`
  padding: 0 10px;
`;

export const StyledContainer = styled(Container)`
  background: transparent;
  height: auto;
  margin: 20px 0;
`;
