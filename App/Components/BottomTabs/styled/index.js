import styled from 'styled-components/native';
import {Footer, Button, FooterTab, Text} from 'native-base';

export const StyledFooterTab = styled(FooterTab)`
  background-color: #ffffff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const StyledFooter = styled(Footer)`
  background-color: transparent;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const StyledText = styled(Text)`
  font-size: 10px;
  line-height: 10px;
  color: #9b9b9b;
  padding: 0;
  margin-top: 5px;
`;

export const StyledButton = styled(Button)`
  height: 100%;
`;
