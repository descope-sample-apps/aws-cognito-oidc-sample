# AWS Cognito with Descope in Hosted UI Sample App

## Description

This is a very simple react app to demonstrate how to implement Descope as an OIDC provider with Cognito by using AWS Amplify.

If you would like to see a demo of the app hosted with AWS Amplify, this app is also hosted [here](main.d1rua11q42kscj.amplifyapp.com/).

> **Note**: If you need the flow, to work with OIDC and Passkeys, it is the `oidc-flow.json` file in the root of this directory. This can be downloaded and imported via the [Descope Console](https://app.descope.com/flows).

## Project Setup

1. Create `.env` for env variables;

```
REACT_APP_USERPOOL_ID=<region>_<id>
REACT_APP_USERPOOL_WEB_CLIENT_ID=<user pool client ID>
REACT_APP_AWS_REGION=<region>
REACT_APP_COGNITO_HOSTED_UI=<url of hosted UI>
REACT_APP_COGNITO_DOMAIN=<cognito domain>
DESCOPE_PROJECT_ID=<Descope Project ID from Descope Console>
```

> **Note**: This app uses the AWS Hosted UI, so it can be easily re-configured. The app would operately similarly however if a custom login page was used instead.

2. Install all of the packages

You can install all of the necessary packages by running `yarn install`

## Run

Run the program using:

`yarn start`

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section.

## Author

[Descope](https://descope.com)

## License

This project is licensed under the MIT license.
