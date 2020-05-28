import React from 'react';
import styled from 'styled-components';
import {View, Image, Text} from 'react-native';

const NewsContainer = styled(View)`
  border-bottom-color: #000;
  border-bottom-width: 2px;
  padding: 20px 0;
`;

const NewsTitle = styled(Text)`
  color: ${({theme}) => theme.PRIMARY_TEXT_COLOR};
  font-size: 23px;
  font-weight: bold;
  margin: 0 0 15px 0;
`;

const NewsText = styled(Text)`
  color: ${({theme}) => theme.SECONDARY_TEXT_COLOR};
  font-size: 15px;
  margin: 10px 0;
`;

const NewsImage = styled(Image)`
  height: 300px;
`;

const NewsSourceImage = styled(Text)`
  font-size: 12px;
  color: ${({theme}) => theme.THIRD_TEXT_COLOR};
  margin-bottom: 10px;
  text-align: right;
`;

const NewsSource = styled(Text)`
  color: ${({theme}) => theme.PRIMARY_TEXT_COLOR};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const NewsDate = styled(Text)`
  font-size: 10px;
  color: ${({theme}) => theme.SECONDARY_TEXT_COLOR};
  text-align: left;
`;

const NewsLiveUptate = styled(Text)`
  background-color: #d0021b;
  text-align: center;
  height: 30px;
  width: 110px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px 0;
  margin-bottom: 5px;
`;

const parseDate = ({published_date}) => {
  const fullDate = new Date(published_date);

  const month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(
    fullDate,
  );
  const day = fullDate.getDate();
  const year = fullDate.getFullYear();

  return (
    <NewsDate>
      {month} {day}, {year}
    </NewsDate>
  );
};

const News = ({value}) => {
  return (
    <NewsContainer testID="news">
      {value.byline === '' && (
        <NewsLiveUptate testID="live-news">Live Updates</NewsLiveUptate>
      )}
      <NewsImage source={{uri: value.multimedia[0].url}} />
      <NewsSourceImage>{value.multimedia[0].copyright}</NewsSourceImage>
      <NewsTitle testID="title-news">{value.title}</NewsTitle>

      {value.byline !== '' && (
        <NewsSource testID="source-news">{value.byline}</NewsSource>
      )}

      <NewsText testID="abstract-news">{value.abstract}</NewsText>
      {parseDate(value)}
    </NewsContainer>
  );
};

export default News;
