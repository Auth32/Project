import React from 'react';
import { TwitterLogin } from 'react-twitter-auth';
import { APP_CONFIG } from "../../app.config";
import jwtDecode from 'jwt-decode';

export const TwitterConnect: React.FC = () => {
  const onSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    // const credential = jwtDecode(credentialResponse.credential)
    // console.log(credential);
  };

  const onFailure = (error) => {
    console.log('Login Failed', error);
  };

  return (
    <TwitterLogin
      loginUrl="http://localhost:3001/api/v1/auth/twitter"
      onFailure={onFailure}
      onSuccess={onSuccess}
      requestTokenUrl="http://localhost:3001/api/v1/auth/twitter/reverse"
      render={renderProps => (
        <button
          onClick={renderProps.onClick}
          style={APP_CONFIG.buttonTheme}
        >
          <i className="fa-brands fa-twitter px-2 "></i>
          Continue with Twitter
        </button>
      )}
      />
  );
};
