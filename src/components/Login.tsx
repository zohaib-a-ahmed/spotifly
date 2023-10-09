import { Button, VStack, Text, Center } from '@chakra-ui/react';
import { BsSpotify } from 'react-icons/bs'
import crypto from 'crypto-js';
import randomString from 'crypto-random-string';

const Login = () => {

    const generateCodeVerifier = () => {
        return randomString({ length: 128, type: 'url-safe' });
      };
    
      const generateCodeChallenge = (verifier: string) => {
        return crypto.enc.Base64.stringify(crypto.SHA256(verifier)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
      };
    
      const buildAuthUrl = (codeChallenge: string) => {
        const clientId = '3ab044b7c64444e2a8cb80639042bd70';
        const redirectUri = encodeURIComponent('http://localhost:5173/auth');
        
        const scopes = encodeURIComponent(
          'user-read-private user-read-email user-top-read playlist-read-private playlist-modify-public playlist-modify-private playlist-read-collaborative'
        );
      
        return `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}&code_challenge_method=S256&code_challenge=${codeChallenge}`;
      };
      
    
      const handleLogin = () => {
        const codeVerifier = generateCodeVerifier();
        const codeChallenge = generateCodeChallenge(codeVerifier);
        const authUrl = buildAuthUrl(codeChallenge);
        window.location.href = authUrl;
      };
      

  return (
    <Center>
        <VStack
            spacing={8}
            position="absolute"
            top = '10%'
            >
            <Text fontSize={['4xl', '6xl', "9xl"]} fontWeight="bold" color='green'>Spotifly</Text>
            <Text fontSize={['l', "4xl"]} fontWeight='semibold' color='green'>Personalize your listening experience</Text>
            <Button
                colorScheme="whatsapp"
                variant='outline'
                rightIcon={<BsSpotify/>}
                size={['sm', "lg"]}
                onClick={handleLogin}
            >
                Continue with Spotify
            </Button>
        </VStack> 
    </Center>
  );
};
  

export default Login;
