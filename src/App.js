import React, {useState} from 'react';

import './App.css';
import NavBar from './components/common/navbar/navbar.js'

import CssBaseline from '@material-ui/core/CssBaseline';

import { Authenticator, Greetings, ChatBot } from 'aws-amplify-react'; 
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

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



function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false)
  let [currentUserName, setCurrentUserName] = useState("Who are you?")
  
  const authenticationStateChange = (authState) => {
    console.log("Processing auth state: "+authState)
    if(authState === "signedIn") { //successful sign in
      setIsLoggedIn(true)
      Amplify.Auth.currentAuthenticatedUser().then((userInfo)=>{setCurrentUserName(userInfo.attributes.name)})
    } else if(authState === "signIn") { //prompt for username password
      setIsLoggedIn(false)
    } else if(authState === "signOut") { //signed out
      setIsLoggedIn(false)
    } else {
      console.error("Authentication state not yet implemented for: "+authState)
    }
  }

  const handleComplete = (err, confirmation) => {
    if (err) {
      alert('Bot conversation failed')
      return;
    }

    alert('Success: ' + JSON.stringify(confirmation, null, 2));
    return 'Trip booked. Thank you! what would you like to do next?';
  }


  return (
    <React.Fragment>
    <CssBaseline />
    {
      <div className="App">
      <NavBar isLoggedIn={isLoggedIn} userName={currentUserName} />

    {!isLoggedIn ? (
    <Authenticator
      onStateChange={authenticationStateChange}  
      signUpConfig={signUpConfig}
      hide={ 
        [
          Greetings
        ]
      }
    />
    ) : (
<ChatBot
    title="Book a Trip Bot"
    //theme={myTheme}
    botName="BookTrip_chatenv"
    welcomeMessage="Welcome, how can I help you today?"
    onComplete={handleComplete.bind(this)}
    clearOnComplete={true}
    conversationModeOn={false}
/>

    )}
  </div>
    }
  </React.Fragment>

  );
}






export default App;
