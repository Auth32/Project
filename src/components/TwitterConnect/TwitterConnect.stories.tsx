import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TwitterConnect } from "./TwitterConnect";


const meta: Meta<typeof TwitterConnect> = {
  component: TwitterConnect,
  title: "Auth32/TwitterConnect",
  argTypes: {},
}

export default meta;

type Story = StoryObj<typeof TwitterConnect>;

export const Primary: (args) => JSX.Element = (args) => (
  <TwitterConnect onLoginSuccess={function (response: any): void {
    throw new Error("Function not implemented.");
  } } onLoginFailure={function (error: any): void {
    throw new Error("Function not implemented.");
  } }/>
);