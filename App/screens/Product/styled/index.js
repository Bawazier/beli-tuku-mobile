import styled from 'styled-components/native';
import {Content, Button, Text} from 'native-base';

export const StyledContent = styled(Content)`
  background: transparent;
`;

export const StyledFooter = styled.View`
  background-color: #ffff;
  padding: 20px 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  elevation: 30;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  align-self: center;
  elevation: 10;
`;
export const StyledTextButton = styled(Text)`
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

export const StyledImage = styled.Image`
  width: null;
  height: 450px;
  resize-mode: cover;
  margin-bottom: -15px;
`;
export const Row = styled.View`
  width: auto;
  height: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #f9f9f9;
`;
export const Col = styled.View`
  height: auto;
`;
export const StyledViewContent = styled.View`
  background: #f9f9f9;
  padding: 10px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  elevation: 20;
`;
export const StyledTextProduct = styled.Text`
  font-size: 24px;
  line-height: 29px;
  color: #222222;
`;
export const StyledTextBrand = styled.Text`
  font-size: 11px;
  line-height: 11px;
  /* identical to box height */

  /* Gray */

  color: #9b9b9b;
`;
export const StyledTextDescription = styled.Text`
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.15px;
  color: #222222;
  margin-bottom: 10px;
`;
export const StyledTextPrice = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height, or 29px */

  text-align: right;

  color: #42d86c;
`;

export const StyledTextColor = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #222222;
`;

export const StyledViewColor = styled.View`
  width: auto;
  height: auto;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const StyledColor = styled(Button)`
  width: 36px;
  height: 36px;
  margin-right: 10px;
  border-radius: 160px;
  background: ${(props) => props.color};
  border: ${(props) => (props.isClick ? '1px solid #DB3022' : 'none')};
`;

export const StyledViewAnotherProduct = styled.View`
  background: #f9f9f9;
  padding: 10px;
  border-top-width: 0.4px;
  border-top-color: #9b9b9b;
  elevation: 20;
`;

export const StyledRow = styled.View`
  width: auto;
  height: auto;
  flex-direction: row;
  align-items: center;
  background: #f9f9f9;
  margin-top: 10px;
`;

export const StyledText = styled.Text`
  font-size: 18px;
  line-height: 22px;
  color: #222222;
`;

export const StyledTextSecondary = styled.Text`
  font-size: 11px;
  line-height: 11px;
  text-align: right;
  color: #9b9b9b;
`;

export const StyledViewInfo = styled.View`
  elevation: 2;
  background-color: #ffff;
  border-radius: 5px;
  margin: 10px -5px;
`;
