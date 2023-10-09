import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Center, Text, VStack } from "@chakra-ui/react";

const Dash = () => {
  const location = useLocation();
  
  // Retrieve the data from location.state
  const data = location.state?.data;
  
  useEffect(() => {
    console.log('Data received:', data);
  }, [data]);

  return (
    <>
      <Center>
        <VStack spacing={8} position="absolute" top='10%'>
          <Text fontSize={['4xl', '6xl', "9xl"]} fontWeight="bold" color='green'>
            This is the dash
          </Text>
          <Text fontSize={['xl']} fontWeight="bold" color='green'>User: {data?.user}</Text>
          <Text fontSize={['xl']} fontWeight="bold" color='green'> Top Tracks: {data?.topTracks.join(', ')}</Text>
        </VStack>
      </Center>
    </>
  );
};

export default Dash;