const Login = ({
  emailAddressLabel,
  passwordLabel,
  rememberMeLabel,
  submitButtonLabel,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Login");
      }}
    >
      <h2>Login</h2>
      <input type="email" placeholder={emailAddressLabel} required />
      <input type="password" placeholder={passwordLabel} required />
      <label>
        {rememberMeLabel}
        <input type="checkbox" />
      </label>
      <button type="submit">{submitButtonLabel}</button>
    </form>
  );
};

export { Login };
