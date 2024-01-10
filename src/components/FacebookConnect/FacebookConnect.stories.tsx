import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FacebookConnect } from "./FacebookConnect"; { }

const meta: Meta<typeof FacebookConnect> = {
  component: FacebookConnect,
  title: "Auth32/FacebookConnect",
  argTypes: {},
}
export default meta;

type Story = StoryObj<typeof FacebookConnect>;

export const Primary: (args) => JSX.Element = (args) => {

  return (
    <FacebookConnect/>
  );
}