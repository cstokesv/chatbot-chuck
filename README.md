# Chatbot Chuck
This is a simple project to create a react matierial UI project to try out AWS Amplify

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### Windows
`set HTTPS=true&&npm start`

### Bash
`HTTPS=true npm start`


Runs the app in the development mode with a self signed SSL certificate<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The first time you open this, the browser should ask you to add an exception for a self signed SSL certificate.<br>
The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### AWS Amplify Backend 

TODO: update readme with amplify info

**Note: `amplify/team-provider-info.json` was added to gitignore since I'm making this project open source, however, this would be useful for sharing within a team in a closed source control environment so the team can use the same cloudformation setup. For more info see: https://aws-amplify.github.io/docs/cli/multienv#sharing-a-project-within-a-team


output from `amplify init` one time command:
```
Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify <category> add" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```
### Current Environment

`https://chatbot-chuck-20190708153945-hostingbucket-chatenv.s3-website-us-east-1.amazonaws.com/`
