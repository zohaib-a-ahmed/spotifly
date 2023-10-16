import { useEffect, useState } from 'react';
import { supabase } from '../supaBaseClient';
import { Button, Center, VStack, Text } from '@chakra-ui/react';

const Dash = () => {
  const [accessToken, setAccessToken] = useState('');
  const [providerToken, setProviderToken] = useState<string | null | undefined>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(`Supabase auth event: ${event}`);
        if (session) {
          setAccessToken(session.access_token);  // set access token to state
          setProviderToken(session.provider_token);
        }
      }
    );
    // Cleanup subscription
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleClick = async () => {
      if (!accessToken) {
        console.error('User is not logged in');
        return;
      }
      try {
        const { data} = await supabase.functions.invoke('wrapped', {
          body: { name: 'ooga booga',
        access: providerToken },
          headers: { Authorization: `Bearer ${accessToken}` },
        })
        console.log(data)
    } catch (error){
      console.log('ERROR:', error)
    };
  }

    return (
      <>
        <Center>
          <VStack spacing={8} position="absolute" top='10%'>
            <Text fontSize={['4xl', '6xl', "9xl"]} fontWeight="bold" color='green'>
              This is the dash
            </Text>
            <Button onClick={handleClick}>
              Invoke Edge Function
            </Button>
          </VStack>
        </Center>
      </>
    );
  };

export default Dash;
