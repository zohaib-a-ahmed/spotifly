import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');

    if (code) {
      console.log('Authorization code:', code);
      
      // Make firebase intiial call
      const fakeData = {
        user: 'John Doe',
        topTracks: ['Track 1', 'Track 2', 'Track 3'],
      };
      console.log('navigating')
      navigate('/dash', {state: { data: fakeData }}); 
    } else {
      console.error('Failed to retrieve authorization code');
    }
  }, [location, history]);

  return (
    <>
    </>
  );
};

export default AuthCallback;
