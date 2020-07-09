import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitForElement, mockFn } from '@testing-library/react';

import { store } from '../app/store';
import PostList from '../routes/PostList';

const getPosts = require('../api/posts').getPosts;
jest.mock('../api/posts', () => ({
  getPosts: jest.fn(),
}));

const error = new Error('FAIL!');

describe('when fetching posts fails display error', () => {
  beforeEach(() => {
    getPosts.mockRejectedValue(error);
  });
  afterEach(() => {
    getPosts.mockReset();
  });
  it('shows an error message', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <PostList />
        </Router>
      </Provider>,
    );
    await waitForElement(() =>
      getByText('Oops, there seems to be some kind of error, please try refreshing the page or comeback later'),
    );
  });
});
