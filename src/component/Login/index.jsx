import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { postLogin } from '../../redux/login/actions';
import './index.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(postLogin(email, password));
  };

  return (
    <section className="login">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email" className="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={onChangeEmail}
            />
          </label>

          <label htmlFor="password" className="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              required
              onChange={onChangePassword}
            />
          </label>

          <button onSubmit={() => { handleLogin(); }} type="submit">LOGIN</button>

          <span className="message">{ auth.message }</span>

        </form>
      </div>
    </section>
  );
};

export default Login;
