import React from 'react';
import {render} from '@testing-library/react-native';
import News from '../src/components/News';
import MOCK from '../__mocks__/NewsMock.json';

const author = 'By Natalie Kitroeff and Paulina Villegas';
const withAuthor = {
  ...MOCK,
  byline: author,
};

describe('<News/>', () => {
  it('should render a title', () => {
    const {getAllByTestId} = render(<News value={MOCK} />);
    const title = getAllByTestId('title-news')[0].children.toString();
    expect(title).toEqual(MOCK.title);
  });

  it('should render an abstract', () => {
    const {getAllByTestId} = render(<News value={MOCK} />);
    const abstract = getAllByTestId('abstract-news')[0].children.toString();
    expect(abstract).toEqual(MOCK.abstract);
  });

  it('should render "Live Update" ', () => {
    const {getAllByTestId} = render(<News value={MOCK} />);
    const liveUpdate = getAllByTestId('live-news')[0];
    expect(liveUpdate).toBeTruthy();
  });

  it('dont should render source ', () => {
    const {getAllByTestId} = render(<News value={withAuthor} />);
    const author = getAllByTestId('source-news')[0].children.toString();
    expect(author).toEqual(withAuthor.byline);
  });
});
