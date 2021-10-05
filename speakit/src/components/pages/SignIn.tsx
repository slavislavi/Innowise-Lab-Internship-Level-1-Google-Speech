import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { setError, signin } from '../../store/actions/authActions';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Message from '../UI/Message';


const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
    }
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (error) {
      dispatch(setError(''));
    }
    setLoading(true);
    dispatch(signin({ email, password }, () => setLoading(false)));
  }

  return (
    <section>
      <div>
        <h2>Sign In</h2>
        <form onSubmit={submitHandler}>
          {error && <Message type="danger" msg={error} />}
          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email address"
            label="Email address"
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
            label="Password"
          />
          <p><Link to="/forgot-password">Forgot password ?</Link></p>
          <Button text={loading ? "Loading..." : "Sign In"} disabled={loading} />
        </form>
      </div>
    </section>
  );
}

export default SignIn;
