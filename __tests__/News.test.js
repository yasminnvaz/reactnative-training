import React from 'react';
import {render} from '@testing-library/react-native';
import News from '../src/components/News';
import MOCK from '../__mocks__/news.js';

const news = MOCK.results[0];
const author = 'By Natalie Kitroeff and Paulina Villegas';
const withAuthor = {
  ...news,
  byline: author,
};

describe('<News/>', () => {
  it('should render a title', () => {
    const {getAllByTestId} = render(<News value={news} />);
    const title = getAllByTestId('title-news')[0].children.toString();
    expect(title).toEqual(news.title);
  });

  it('should render an abstract', () => {
    const {getAllByTestId} = render(<News value={news} />);
    const abstract = getAllByTestId('abstract-news')[0].children.toString();
    expect(abstract).toEqual(news.abstract);
  });

  it("should render 'Live Update' when don't have news source", () => {
    const {getAllByTestId} = render(<News value={news} />);
    const liveUpdate = getAllByTestId('live-news')[0];
    expect(liveUpdate).toBeTruthy();
  });

  it('should render source', () => {
    const {getAllByTestId} = render(<News value={withAuthor} />);
    const source = getAllByTestId('source-news')[0].children.toString();
    expect(source).toEqual(withAuthor.byline);
  });
});
