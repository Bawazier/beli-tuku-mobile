import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const StyledTextHeader = styled.Text`
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #222222;
`;

export const StyledTextButton = styled.Text`
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

export const StyledText = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: #9b9b9b;
  margin: 10px;
`;

export const StyledTextCategory = styled.Text`
  font-size: 16px;
  line-height: 16px;
  color: #222222;
`;

export const StyledViewButton = styled.View`
  margin: 20px;
`;

export const StyledTouchableOpacity = styled(TouchableOpacity)`
  margin: 0;
`;
