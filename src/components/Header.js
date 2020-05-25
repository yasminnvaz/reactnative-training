import React from 'react';
import styled from 'styled-components';
import {Text, View} from 'react-native';

const Header = styled(View)``;

const Title = styled(Text)`
  color: ${({theme}) => theme.PRIMARY_TEXT_COLOR};
  font-weight: bold;
  text-align: left;
  font-size: 24px;
`;

export default ({title}) => (
  <Header>
    <Title>{title}</Title>
  </Header>
);
