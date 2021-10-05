
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setSuccess } from '../../store/actions/authActions';


const Dashboard: React.FC = () => {
  const { user, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return (
    <section>
      <div>
        <h1>Welcome {user?.firstName}</h1>
      </div>
    </section>
  );
}

export default Dashboard;
