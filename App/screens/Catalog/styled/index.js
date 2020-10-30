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
  font-weight: normal;
  font-size: 11px;
  line-height: 11px;
  text-align: center;
  color: #222222;
`;

export const StyledViewTab = styled.View`
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
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
