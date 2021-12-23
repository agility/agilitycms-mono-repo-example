import React from "react";

import { Login } from "./Login";

export default {
  title: "Common/Login",
  component: Login,
  argTypes: {
    emailAddressLabel: { control: "text" },
    passwordLabel: { control: "text" },
    rememberMeLabel: { control: "text" },
    submitButtonLabel: { control: "text" },
  },
};

const Template = (args) => <Login {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  emailAddressLabel: "Email Address",
  passwordLabel: "Password",
  rememberMeLabel: "Remember Me",
  submitButtonLabel: "Submit",
};
