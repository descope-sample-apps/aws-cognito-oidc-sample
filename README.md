# AWS Cognito with Descope in Hosted UI Sample App

## Description

This is a very simple react app to demonstrate how to implement Descope as an OIDC provider with Cognito by using AWS Amplify.

## Setup

1. Create `.env.local` for env variables;

```
REACT_APP_USERPOOL_ID=<region>_<id>
REACT_APP_USERPOOL_WEB_CLIENT_ID=<user pool client ID>
REACT_APP_AWS_REGION=<region>
REACT_APP_COGNITO_HOSTED_UI=https://sample-app-prod.auth.us-west-2.amazoncognito.com/login?client_id=hc41tcvou8203iqtuub08rtnn&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard
REACT_APP_COGNITO_DOMAIN=<cognito domain>
```

2. Install all of the packages

You can install all of the necessary packages by running `yarn install`

## Run

Run the program using:

`yarn start`

If you need the flow, to work with OIDC and Passkeys, it is the `oidc-flow.json` file in the root of this directory. This can be downloaded and imported via the [Descope Console](https://app.descope.com/flows).
