import React from "react";
import AppleLogin from 'react-apple-login'
import { APP_CONFIG } from "../../app.config";


export const AppleConnect = () => {
  return (
    <AppleLogin
      clientId="YOUR_CLIENT_ID"
      redirectURI="YOUR_REDIRECT_URL"
      usePopup={true}
      scope="email name"
      responseMode="query"
      onSuccess={(response) => {
        console.log(response.email);
      }}
      onFailure={(error) => {
        console.log({error});
      }}
      render={renderProps => (  //Custom Apple Sign in Button
        <button
          onClick={renderProps.onClick}
          style={APP_CONFIG.buttonTheme}
        >
          <i className="fa-brands fa-apple px-2 "></i>
          Continue with Apple
        </button>
      )}
    />
  );
}