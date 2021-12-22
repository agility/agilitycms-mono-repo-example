const Login = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Login");
      }}
    >
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit" placeholder="Login" />
    </form>
  );
};

export { Login };
