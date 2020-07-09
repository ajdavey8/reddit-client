import React, { Suspense, lazy } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

const PostList = lazy(() => import('./routes/PostList'))
const Post = lazy(() => import('./routes/Post'))


const Routes = () => (
  <Suspense fallback={<div>Loading...</div>} >
    <Switch>
      <Route exact path='/'>
        <PostList />
      </Route>
      <Route path='/post/:id'>
        <Post />
      </Route>
    </Switch>
  </Suspense>
)

export default Routes;