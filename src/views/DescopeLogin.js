import { Descope } from "@descope/react-sdk";


export const DescopeLogin = () => {
  return (
    <div className="main-container-login">
      <div className="login-container">
        <Descope
          flowId="sign-up-or-in"
          onSuccess={(e) => console.log("Logged in!")}
          onError={(e) => console.log("Could not log in!")}
          theme="light"
        />
      </div>
    </div>
  );
};

export default DescopeLogin;
