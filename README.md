# Tutor House Test
A quick build React application that was created using Create React App and Material UI.
The app should also be mobile friendly.

The create react app is a helpful template that does the intial boilerplate setup and very useful to quickly
get started on creating a React app with the ability to progressively customise as required.

The material UI was used to help create a few common components so as not to spend too much time on the UI, even though it still took a large portion of time.

## Instructions
`yarn` or `npm` install to install dependencies. (Note: Yarn was originally used so yarn.lock file is available)
`yarn start` or `npm run start` to start the app.
`yarn test` or `npm run test` to run all the tests.

## Technology Choice

For React, I decided to utilise some of the newer Hook features to create leaner functional components that
provide almost all the full functionality of class based ones and with shorter code.

It was a good time to utilise their improvement in state and context management that allows one to use only React without the need for state management library for small/medium apps.

Yarn was the package manager of choice, although I used to advocate its use before, I don't think npm is that far off, yarn has better dependency management with a more stable lockfile but consumes large amount of memory for its cache. Npm is lighter, has a fairly good lockfile and does not have the memory issues of Yarn.

## TODOs
Pagination is not complete, mainly because the next/previous links from the API didn't work, it always threw an error so I had to leave it out, you may see blank buttons.

More structure and best practices. I think due to the rapid development, some best practices have been left out, for example with regards to CSS structuring and Material UI component customisation.

Need to add better test mocking that isolates the API, this is really only possible with async handling libraries such as redux-saga and redux-thunk.
