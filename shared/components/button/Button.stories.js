import React from "react";

import { Button } from "./Button";

export default {
  title: "Custom/Button",
  component: Button,
  argTypes: {
    label: { control: "string" },
    color: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Primary Btn",
  color: "red",
};

export const Secondary = Template.bind({});

Secondary.args = {
  primary: true,
  label: "Secondary Btn",
};
