import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';

const NotFound = () => {
  const [redirect, setRedirect] = useState(false);
  // const navigate = useNavigate();

  setTimeout(() => {
    setRedirect(true);
  }, 3000);

  // useEffect(() => {
  //   if (redirect) {
  //     navigate('/');
  //   }
  // }, [redirect, navigate]);

  return (
    <>
      <h1>404 Not Found</h1>
      <p>You will be redirected to the home page in 3 seconds.</p>
      {redirect && <Navigate replace to='/' />}
    </>
  );
};

export default NotFound;
