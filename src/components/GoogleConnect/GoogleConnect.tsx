import React from "react";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


export const GoogleConnect: React.FC = () => {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const credential = jwtDecode(credentialResponse.credential)
        console.log(credential.email);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}