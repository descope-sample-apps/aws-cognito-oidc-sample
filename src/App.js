import "./App.css";
import Amplify from "aws-amplify";
import React from "react";


Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: process.env.REACT_APP_AWS_REGION,

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: process.env.REACT_APP_USERPOOL_ID,

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: process.env.REACT_APP_USERPOOL_WEB_CLIENT_ID,

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,

    // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
    authenticationFlowType: "USER_PASSWORD_AUTH",

    // OPTIONAL - Hosted UI configuration
    oauth: {
      domain: `${process.env.REACT_APP_COGNITO_DOMAIN}.auth.us-west-2.amazoncognito.com`,
      scope: ["openid", "email", "phone", "profile"],
      redirectSignIn: "https://main.d1rua11q42kscj.amplifyapp.com/dashboard",
      redirectSignOut: "https://main.d1rua11q42kscj.amplifyapp.com/",
      responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
  },
});

function App(props) {
  return (
    <>
      <div className="navbar">
        <h2 className="sample-logo blue">Sample App</h2>
        <button
          className="login-btn"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = process.env.REACT_APP_COGNITO_HOSTED_UI;
          }}
        >
          Login
        </button>
      </div>
      
      <div className="home">
        <h1 className="title"><span className="blue">Cognito Sample App</span> with Hosted UI and <span className="blue">Descope as an OIDC Provider</span></h1>
        <p className="powered"><div className="blue-dot"></div>Powered by Descope</p>
        <button
          className="dashboard-btn"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = process.env.REACT_APP_COGNITO_HOSTED_UI;
          }}
        >
          Dashboard &nbsp;<span className="arrow">→</span>
        </button>
      </div>
    </>
  );
}

export default App;
