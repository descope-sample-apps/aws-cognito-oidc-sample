import React, { useEffect, useState } from "react";
import "../App.css";
import { Auth } from "aws-amplify";
import { Navigate } from "react-router-dom";
import axios from "axios";


import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";


function Dashboard(props) {
  const [user, setUser] = useState();
  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  async function getCurrentUser() {
    try {
      const authUser = await Auth.currentAuthenticatedUser();
      console.log(JSON.stringify(authUser));
      setUser(authUser);
    } catch (e) {
      console.log("error happened", e);
      setUser(null);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setApiResponse(`{
      "statusCode": 200,
      "body": {
        "Message": "You are logged in!"
      }
    }`)
    getCurrentUser();
  }, []);

  async function handleCallProtectedMethod(event) {
    event.preventDefault();
    const accessToken = user["signInUserSession"]["accessToken"]["jwtToken"];
    const headers = {
      Authorization: "Bearer " + accessToken,
    };
    const apiResp = await axios.get(
      `https://hkbcq1nsnh.execute-api.us-west-2.amazonaws.com/Stage/oidc-get`,
      { headers }
    );
    setApiResponse(JSON.stringify(apiResp.data));
  }

  async function handleSignOut(event) {
    event.preventDefault();
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
    setUser(null);
    setIsLoading(false);
  }

  // if (!user && !isLoading) {
  //   return <Navigate to="/" replace={true} />;
  // }

  return (
    <>
      <div className="navbar">
        <h2 className="sample-logo blue">Sample App</h2>
        <button className="login-btn logout-btn" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>

      <div className="home">
        <h1 className="dash-title">You can test the AWS API Gateway Here</h1>
        <p className="dash-tag">
          Press this button to make a GET HTTP request to the OIDC-Test endpoint
          configured with our AWS API Gateway
        </p>
        <button className="api-button" onClick={handleCallProtectedMethod}>
          Call API
        </button>
        <div className="api-response-box">
          <JSONPretty id="json-pretty" data={apiResponse}></JSONPretty>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
