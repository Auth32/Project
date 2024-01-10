import React from 'react';
import { APP_CONFIG } from "../../app.config";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

export const FacebookConnect: React.FC = () => {

  const responseFacebook = (response) => {
    //console.log(response);
    console.log({ name: response.name, email: response.email, picture: response.picture.data.url })
  }

  return (
    <FacebookLogin
      appId={APP_CONFIG.facebook.id}
      autoLoad
      fields="name,email,picture"
      callback={responseFacebook}
      render={renderProps => (
        <button
          onClick={renderProps.onClick}
          style={APP_CONFIG.buttonTheme}
        >
          <i className="fa-brands fa-facebook px-2 "></i>
          Continue with Facebook
        </button>
      )}
    />
  );
}