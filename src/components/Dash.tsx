import { useEffect } from 'react';
import { Center, Text, VStack } from "@chakra-ui/react";
import { supabase } from '../supaBaseClient';

const Dash = () => {
  
  useEffect(() => {
    console.log('User:', supabase.auth.getUser());
    console.log('Session:', supabase.auth.getSession());
  });
  

  return (
    <>
      <Center>
        <VStack spacing={8} position="absolute" top='10%'>
          <Text fontSize={['4xl', '6xl', "9xl"]} fontWeight="bold" color='green'>
            This is the dash
          </Text>
        </VStack>
      </Center>
    </>
  );
};

export default Dash;