# Reddit Wallpapers Client

## Summary

This app is a basic Reddit client read only app. It displays the top posts from the wallpapers subreddit and allows the user to click on the posts and view the top comments. It also has lazy loading to fetch more posts on scroll and when viewing a single post will persist in showing that post and comments on page refresh.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Approach and Decisions

I was required to use Redux for state management and have also experimented with Redux Toolkit as it is meant to reduce the boilerplate code for redux plus makes use of Immer.js, this makes it easier to write more readable code and not mutate data. I haven't used normalizr due to time restrictions but I have normalised the data.

For styling it was a requirement to use SASS, the app is styled very basically and needs a bit more work but I've styled the posts very close to designs and have tried to use a logical structure.

For testing, I've only written a couple of intergration tests. The app most definetly needs more, these are more a demonstration of testing due to time restraints. With more time I'd have written more intergration and tests and improved the ones I have along with some e2e tests using Cypress.io. I would say there is an argument that unit tests for this app are expensive in terms of time vs confindence.

I also used TypeScript as a personal preference over PropTypes or Flow. I haven't used TS to the full extent of its utility in this app for better demonstrations of my TS skills please view some of my other repos ([To-Do-List](https://github.com/ajdavey8/To-Do-List) and [shopping-basket](https://github.com/ajdavey8/shopping-basket)).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
