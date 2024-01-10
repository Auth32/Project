import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { GoogleConnect } from "./GoogleConnect";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { APP_CONFIG } from "../../app.config";


const meta: Meta<typeof GoogleConnect> = {
  component: GoogleConnect,
  title: "Auth32/GoogleConnect",
  argTypes: {},
}
export default meta;

type Story = StoryObj<typeof GoogleConnect>;

export const Primary: (args) => JSX.Element = (args) => (
  <GoogleOAuthProvider clientId={APP_CONFIG.google.id}>
    <GoogleConnect/>
  </GoogleOAuthProvider>
);