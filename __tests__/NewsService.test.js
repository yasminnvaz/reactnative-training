import axiosMock from 'axios';
import MOCK from '../__mocks__/news';
import {getNewsBySection, URL_API, KEY_API} from '../src/services/NewsService';

jest.mock('axios');

describe('News Service', () => {
  it('should returns "OK" from NewYorkTimes request', async () => {
    axiosMock.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: MOCK.status,
      }),
    );

    const news = await getNewsBySection('world');
    expect(news).toEqual(MOCK.status);
  });
});
