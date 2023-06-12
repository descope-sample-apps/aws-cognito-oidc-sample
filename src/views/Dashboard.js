import React, { useEffect, useState } from "react";
import "../App.css";
import { Auth } from "aws-amplify";
import { Navigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

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

  if (!user && !isLoading) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="api-homepage">
      <div className="navbar">
        <h2>Sample App</h2>
        <button className="signout-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      <div className="content">
        <h1>You can test the AWS API Gateway Here.</h1>
        <p>
          Press this button to make a GET HTTP request to the OIDC-Test endpoint
          configured with our AWS API Gateway
        </p>
        <button className="api-button" onClick={handleCallProtectedMethod}>
          Call API
        </button>
        <div className="api-response-box">
          <h2>API Response:</h2>
          <p>{apiResponse}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
