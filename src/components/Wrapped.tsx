import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, Flex, Box } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

const Wrapped = ({ data }: any) => {
    const [shortTermArtists, setShortTermArtists] = useState([])
    const [shortTermTracks, setShortTermTracks] = useState([])
    const [mediumTermArtists, setMediumTermArtists] = useState([])
    const [mediumTermTracks, setMediumTermTracks] = useState([])
    const [longTermArtists, setLongTermArtists] = useState([])
    const [longTermTracks, setLongTermTracks] = useState([])

    useEffect(() => {
        if (data) {
            console.log(data)
            setShortTermArtists(data.shortTermArtists.items)
            setShortTermTracks(data.shortTermTracks.items)
            setMediumTermArtists(data.mediumTermArtists.items)
            setMediumTermTracks(data.mediumTermTracks.items)
            setLongTermArtists(data.longTermArtists.items)
            setLongTermTracks(data.longTermTracks.items)
        }
    }, [data]);

    type Item = { name: string };

    const getNamesList = (termIndex: number, headerIndex: number) => {
        // Determine the term: short, medium, or long
        const term = termIndex === 0 ? 'short' : termIndex === 1 ? 'medium' : 'long';
    
        // Determine the header: Artists or Tracks
        const header = headerIndex === 0 ? 'Artists' : 'Tracks';
    
        // Determine the appropriate array based on term and header
        const arrays = {
            shortTermArtists: shortTermArtists,
            shortTermTracks: shortTermTracks,
            mediumTermArtists: mediumTermArtists,
            mediumTermTracks: mediumTermTracks,
            longTermArtists: longTermArtists,
            longTermTracks: longTermTracks
        };
        const arrayName = `${term}Term${header}` as keyof typeof arrays;
        const array = arrays[arrayName] as Item[];
    
        // Manually create the list of names
        let namesList = [];
        for (let i = 0; i < array.length; i++) {
            namesList.push(
                <Heading key={i} color={(termIndex + headerIndex + i) % 2 === 0 ? 'purple' : 'green'} mb={headerIndex === 0 ? 3 : 2} size={'sm'}>{i+1}. {array[i].name}</Heading>
            );
        }
    
        return namesList;
    };
    

  return (
    <>
        <Heading size={['xl', '4xl']}>
            <Text as={'span'} color={'green'}>Spotifly </Text>
            <Text as={'span'} color={'purple'}>Wrapped</Text>
        </Heading>
        <Tabs variant="solid-rounded" position="relative" colorScheme="purple" align='center' w={'100%'}>
        <TabList>
            <Tab
            _selected={{ color: "white", bg: "green" }}
            _focus={{ boxShadow: "none" }}
            >
            4 Weeks
            </Tab>
            <Tab
            _selected={{ color: "white", bg: "green" }}
            _focus={{ boxShadow: "none" }}
            >
            6 Months
            </Tab>
            <Tab
            _selected={{ color: "white", bg: "green" }}
            _focus={{ boxShadow: "none" }}
            >
            All Time
            </Tab>
        </TabList>
        <TabPanels>
    {['4 Weeks', '6 Months', 'All Time'].map((_term, i) => (
        <TabPanel key={i}>
            <Flex direction={['column', 'row']}>
                {['Top Artists', 'Top Tracks'].map((header, j) => (
                    <Accordion allowToggle defaultIndex={[2, 0]} key={j} w={'full'} margin={[0, 4]} mb={[4, 0]} background={'#181818'} borderRadius={'3xl'}>
                        <AccordionItem border={0}>
                            <AccordionButton color={{ bg: (i + j) % 2 === 0 ? 'green' : 'purple', color: 'white' }}>
                                <Box as="span" flex = '1' textAlign={'center'}>
                                    <Heading color={(i + j) % 2 === 0 ? 'green' : 'purple'} size={['lg']}>{header}</Heading>
                                </Box>
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                {getNamesList(i, j)}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                ))}
            </Flex>
        </TabPanel>
    ))}
</TabPanels>

        </Tabs>
    </>
  );
};

export default Wrapped;
