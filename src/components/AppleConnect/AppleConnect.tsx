import React from "react";
import AppleLogin from 'react-apple-login';
import { APP_CONFIG } from "../../app.config";
import { Box } from '@mui/material';
import AppleIcon from './apple-logo.svg';
import { ShortButton } from "../ShortButton/ShortButton";



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
      render={renderProps => (
        <ShortButton connectFunction={() => renderProps.onClick} buttonIcon={AppleIcon}/>
      )}
    />
  );
}