import React, { useState } from 'react';
import { APP_CONFIG } from "../../app.config";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { ShortButton } from "../ShortButton";
import FacebookIcon from "./facebookIcon.svg"
import { ConnectionData } from "../../utils/types/connectionData.type";

export const FacebookConnect = () => {

  const [connectionData, setConnectionData]: ConnectionData = useState({
    provider: "facebook",
    name: "",
    email: "",
    profilePicture: ""
  })


  const responseFacebook = (response) => {
    //console.log(response);
    console.log({ name: response.name, email: response.email, picture: response.picture.data.url })
    setConnectionData({
      provider: "facebook",
      name: response.name,
      email: response.email,
      profilePicture: response.picture.data.url
    })
  }

  return (
    <FacebookLogin
      appId={APP_CONFIG.facebook.id}
      fields="name,email,picture"
      callback={responseFacebook}
      render={renderProps => (
        <ShortButton connectFunction={() => renderProps.onClick} buttonIcon={FacebookIcon}/>
      )}
    />
  );
}