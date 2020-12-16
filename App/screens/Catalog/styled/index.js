import styled from 'styled-components/native';
import {Button} from 'native-base';

export const StyledTextHeader = styled.Text`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #222222;
`;

export const StyledTextTab = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  text-align: left;
  color: #222222;
`;

export const StyledViewTab = styled.View`
  flex-direction: row;
  background-color: #ffff;
  padding: 10px 0px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  elevation: 30;
`;
export const StyleButtondTab = styled(Button)`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
`;

export const StyledViewContent = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
`;
