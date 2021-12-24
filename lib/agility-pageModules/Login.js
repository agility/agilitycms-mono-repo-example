import { Login as LoginForm } from "../components/login/Login";

const Login = ({ customData }) => {
  const { login } = customData;
  return (
    <LoginForm
      emailAddressLabel={login.fields.emailAddressLabel}
      passwordLabel={login.fields.passwordLabel}
      rememberMeLabel={login.fields.rememberMeLabel}
      submitButtonLabel={login.fields.submitLabel}
    />
  );
};

Login.getCustomInitialProps = async function ({
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

export { Login };
