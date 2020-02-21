# rrouter
A "hello world" example using React Router

If running locally, then the first URL below will download a CSV file and the second a short string.

- http://localhost:3000/book-package-app/?format=csv&books=gen,mat
- http://localhost:3000/book-package-app/?format=string&books=1jn,2jn,3jn


## Links

- *Installing Typescript*: https://www.typescriptlang.org/#download-links
- *The docs*: https://www.typescriptlang.org/docs/home.html
- *Using React*: https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
- *Create React App with TS*: https://create-react-app.dev/docs/adding-typescript/
- *Playground*: https://www.typescriptlang.org/play/index.html#
and the beta v2 playground: https://www.typescriptlang.org/v2/en/play
- *React Cheatsheets*: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets


## Notes on Project Setup

I have decided to write the app in Typescript. I will document my journey here!

1. get the latest version of typescript: `npm install -g typescript`
2. created repo on github and initialized with README; then cloned and moved README to upper level directory for save keeping (the next command objects to its existence)
2. Now run command to start up a TS React (see links):
```
$ yarn create react-app book-package-app --template typescript
```
4. Tested as recommended and it worked fine. Note that it used port 3000
```
We suggest that you begin by typing:

  cd rrouter
  yarn start

Happy hacking!
Done in 104.98s.
```
5. Put back some of the files I moved for safety.
6. Next added typescript support:
```
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```
7. Noted that `yarn start` will actually launch a Chrome tab to run in... nice.
8. Added to compiler options in `tsconfig.json`: `"downlevelIteration": true`; see https://stackoverflow.com/questions/49218765/typescript-and-iterator-type-iterableiteratort-is-not-an-array-type

9. Next I removed the public folder and copied over the public folder from `book-package-app`. This folder had proper uW favicons, etc.

10. Updated the project title in `public/index.html`.







# Original README from `create app`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
