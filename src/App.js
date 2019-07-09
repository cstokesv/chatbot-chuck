import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/navbar/navbar.js'

import CssBaseline from '@material-ui/core/CssBaseline';

import { withAuthenticator } from 'aws-amplify-react'; 
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


function App() {
  return (
    <React.Fragment>
    <CssBaseline />
    {
      <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    }
  </React.Fragment>

  );
}


const signUpConfig = {
  header: 'Sign Up',
  hideAllDefaults: false,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Name',
      key: 'name',
      required: true,
      displayOrder: 4,
      type: 'string',
      custom: false
    }
  ]
};



export default withAuthenticator(App, {signUpConfig});
