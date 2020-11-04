import styled from 'styled-components/native';
import {H3, H2, Text, Card, CardItem, Body, Badge} from 'native-base';
import {ImageBackground} from 'react-native';

export const StyledTouchableOpacity = styled.TouchableOpacity`
  width: auto;
  height: auto;
  background-color: transparent;
`;

export const StyledCard = styled(Card)`
  width: 150px;
  height: auto;
  margin-right: 16px;
`;

export const StyledCardItem = styled(CardItem)`
  padding: 0px;
`;

export const StyledBody = styled(Body)`
  padding: 5px 5px;
`;

export const StyledH3 = styled(H3)`
  font-size: 11px;
  line-height: 11px;
  color: #222222;
  text-align: right;
`;

export const StyledText = styled(Text)`
  font-size: 11px;
  line-height: 11px;
  color: #9b9b9b;
`;

export const StyledImageBackground = styled(ImageBackground)`
  width: 100%;
  height: 180px;
  resize-mode: center;
  border-radius: 25px;
`;

export const StyledH2 = styled(H2)`
  font-size: 16px;
  line-height: 16px;
  color: #222222;
  margin: 3px 0;
`;

export const StyledBadge = styled(Badge)`
  display: ${(props) => (props.displayBadge ? 'flex' : 'none')};
  background-color: #222222;
  margin: 10px;
`;

export const StyledWhiteH2 = styled(H2)`
  font-size: 11px;
  line-height: 11px;
  text-align: center;
  color: #ffffff;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;
