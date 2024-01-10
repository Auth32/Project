import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { AppleConnect } from "./AppleConnect";


const meta: Meta<typeof AppleConnect> = {
  component: AppleConnect,
  title: "Auth32/AppleConnect",
  argTypes: {},
}

export default meta;

type Story = StoryObj<typeof AppleConnect>;

export const Primary: (args) => JSX.Element = (args) => (
  <AppleConnect/>
);