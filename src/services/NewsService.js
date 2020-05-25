import Axios from 'axios';

const KEY_API = 'Ly1BG1Y4A0ZNYGTEW2af3O3RKrTCOcy8';
const URL_API = 'https://api.nytimes.com/svc/topstories/v2/';

export const getNewsBySection = async (section) => {
  const {data: news} = await Axios.get(
    `${URL_API}${section}.json?api-key=${KEY_API}`,
  );

  return news;
};
