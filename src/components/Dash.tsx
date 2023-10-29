import { useEffect, useState } from 'react';
import { supabase } from '../supaBaseClient';
import Wrapped from './Wrapped';
import {Center, VStack} from '@chakra-ui/react';

const Dash = () => {
  const [accessToken, setAccessToken] = useState('');
  const [providerToken, setProviderToken] = useState<string | null | undefined>(null);
  const [wrappedData, setWrappedData] = useState(null);  // New state to hold the wrapped data

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log(`Supabase auth event: ${event}`);
        if (session) {
          setAccessToken(session.access_token);
          setProviderToken(session.provider_token);
        }
      }
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (providerToken && accessToken) {
      fetchData();
    }
  }, [providerToken, accessToken]);

  const fetchData = async () => {
    try {
      const { data } = await supabase.functions.invoke('wrapped', {
        body: { access: providerToken },
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setWrappedData(data);  // Set the fetched data to state
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  return (
    <>
      <Center>
        <VStack spacing={8} position="absolute" top='10%' width='100%'>
          {wrappedData && <Wrapped data={wrappedData}/>}  // Pass the wrapped data to Wrapped component
        </VStack>
      </Center>
    </>
  );
};

export default Dash;
