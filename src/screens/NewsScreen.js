import React, {useEffect, useState} from 'react';
import {getNewsBySection} from '../services/NewsService';
import {FlatList} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native';

import CustomView from '../components/CustomView';
import News from '../components/News';
import Header from '../components/Header';

export default ({route}) => {
  const title = route.name;
  const section = title === 'Science & Technology' ? 'science' : 'world';

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    const {results} = await getNewsBySection(section);
    setNews(results);
    setLoading(false);
  };

  useEffect(() => {
    const getNews = async () => {
      await loadNews();
    };

    getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CustomView>
      <Header title={title} />
      <FlatList
        data={news}
        renderItem={({item}) => <News value={item} />}
        keyExtractor={(item) => item.uri}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loading && <ActivityIndicator color="#ccc" size="large" />
        }
      />
    </CustomView>
  );
};
