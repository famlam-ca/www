const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="wrapper">
        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon"></span>
              <input type="email" required /> <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon"></span>
              <input type="password" required /> <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">
              LOGIN
            </button>
            <div className="login-register">
              <button type="button" className="btn register-link">
                <a href="#">OR REGISTER HERE</a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
