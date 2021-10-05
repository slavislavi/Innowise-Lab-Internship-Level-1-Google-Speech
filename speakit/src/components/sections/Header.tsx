import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { RootState } from '../../store';
import { signout } from '../../store/actions/authActions';
import Button from '../UI/Button';


const Header: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authenticated } = useSelector((state: RootState) => state.auth);

  const logoutClickHandler = () => {
    dispatch(signout());
  }

  return (
    <nav>
      <div>
        <div>
          <Link to={!authenticated ? "/" : "/dashboard"}>Speakit</Link>
        </div>

        <div>
          <div>
            {!authenticated ? <div>
              <Button text="Sign up" onClick={() => history.push('/signup')} />
              <Button text="Sign in" onClick={() => history.push('/signin')} />
            </div>
              :
              <Button text="Sign out" onClick={logoutClickHandler} />
            }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
