const Register = () => {
  return (
    <>
      <div className="login-wrapper">
        <div className="wrapper">
          <div className="form-box register">
            <h2>Register</h2>
            <form action="#">
              <div className="input-box">
                <span className="icon"></span>
                <input type="text" required /> <label>Username</label>
              </div>
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
                  <input type="checkbox" /> I agree to the
                  <a href="#" className="TaC">
                    terms & conditions
                  </a>
                </label>
              </div>
              <button type="submit" className="btn">
                REGISTER
              </button>
              <div className="login-register">
                <button type="button" className="btn login-link">
                  <a href="#">OR LOGIN HERE</a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
