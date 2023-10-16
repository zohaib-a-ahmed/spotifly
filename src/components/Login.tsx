import { Button, VStack, Text, Center } from '@chakra-ui/react';
import { BsSpotify } from 'react-icons/bs'
import { supabase } from '../supaBaseClient';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {

    const navigate = useNavigate();
    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event) => {
                console.log(`Supabase auth event: ${event}`);

                if (event === 'SIGNED_IN') {
                    navigate('/dash');
                }
            }
        );
        return () => {
            authListener.subscription.unsubscribe();
        };
    }, [navigate]);

    async function signInWithSpotify() {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'spotify',
        options: {
          scopes:
            'user-top-read playlist-read-private playlist-modify-public playlist-modify-private playlist-read-collaborative'
        },
      });
      if (error) {
        console.error('Error signing in: ', error.message)
      }
    }
     

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
                onClick={signInWithSpotify}
            >
                Continue with Spotify
            </Button>
        </VStack> 
    </Center>
  );
};
  

export default Login;
