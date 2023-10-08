import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AuthCallback = () => {
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');

    if (code) {
      console.log('Authorization code:', code);
    } else {
      console.error('Failed to retrieve authorization code');
    }
  }, [location]);

  return null;
};

export default AuthCallback;
