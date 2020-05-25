import React from 'react';
import styled from 'styled-components';
import {SafeAreaView} from 'react-native-safe-area-context';

const CustomView = styled(SafeAreaView)`
  background-color: ${({theme}) => theme.PRIMARY_BACKGROUND_COLOR};
  flex: 1;
  padding: 20px 20px 0 20px;
`;

export default ({children}) => <CustomView>{children}</CustomView>;
