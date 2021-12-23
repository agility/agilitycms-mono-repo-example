import { Login } from "agility-mono-example-design-system";

const LoginExample = ({ login }) => {
  return (
    <Login
      emailAddressLabel={login.fields.emailAddressLabel}
      passwordLabel={login.fields.passwordLabel}
      rememberMeLabel={login.fields.rememberMeLabel}
      submitButtonLabel={login.fields.submitLabel}
    />
  );
};

LoginExample.getCustomInitialProps = async function ({
  agility,
  languageCode,
  channelName,
}) {
  // set up api
  const api = agility;

  try {
    const login = await api.getContentItem({
      contentID: 157,
      languageCode,
    });

    return {
      login,
    };
  } catch (err) {
    console.log(err);
  }
};

export default LoginExample;
