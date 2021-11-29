import React, { useState } from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { MdCheckCircle, MdRemoveCircleOutline } from 'react-icons/md'

const favArr: any = [
  {
    tutor: 'Vic',
    exp1: 'JS',
    dur1: 1,
    exp2: 'Java',
    dur2: 2,
    online: 0,
    key: 0,
  },
  {
    tutor: 'Charley',
    exp1: 'Ada',
    dur1: 2,
    exp2: 'Python',
    dur2: 2,
    online: 0,
    key: 1,
  },
  {
    tutor: 'Jess',
    exp1: 'Pascale',
    dur1: 3,
    exp2: 'C#',
    dur2: 2,
    online: 1,
    key: 2,
  },
  {
    tutor: 'Maylyn',
    exp1: 'Red',
    dur1: 4,
    exp2: 'Fortran',
    dur2: 2,
    online: 0,
    key: 3,
  },
  {
    tutor: 'Tobias',
    exp1: 'Kotlin',
    dur1: 5,
    exp2: 'Cobol',
    dur2: 2,
    online: 0,
    key: 4,
  },
]

const colorBgFav = '#C7D2FE'
const colorNameFav = '#F40B0B'
const colorTextFav = 'black'
const colorHeading = 'white'

const Favourites = () => {
  const [favList, setFavList] = useState(favArr)

  return (
    // TODO: USE FLATLIST/MP TO POPULATE FAVOURITES FROM SERVER/STATE
    // TODO: USE https://chakra-ui.com/docs/overlay/drawer FOR REVIEW

    <Flex color={colorHeading} flexDirection="column" h="100%" minWidth="350px">
      <Heading as="h1" size="xl" fontWeight="600" pt={'1rem'} pb={'1rem'}>
        Favourites
      </Heading>
      <Box
        overflowY={'auto'}
        // scrollBar={"hidden"}
        sx={{
          '&::-webkit-scrollbar': {
            backgroundColor: `rgba(150, 150, 190, 0.15)`,
            borderRadius: '8px',
            width: '16px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `rgba(160, 160, 230, 0.45)`,
            borderRadius: '8px',
          },
        }}
      >
        {favList.map((el: any) => {
          return (
            <Box key={el.dur}>
              <Flex
                flexDirection="row"
                justify="flex-start"
                bg={colorBgFav}
                w="95%"
                p="15px"
                mb="2rem"
                borderRadius={'1rem'}
                border="solid"
              >
                <Flex flexDirection="column" justify="space-between">
                  <Image
                    src="https://bit.ly/dan-abramov"
                    boxSize="5rem"
                    borderRadius="1rem"
                    minWidth="5rem"
                  />
                  <Box position="relative">
                    {el.online === 0 ? (
                      <Text color="green.500" as={MdCheckCircle} />
                    ) : (
                      <Text color="green.500" as={MdRemoveCircleOutline} />
                    )}
                  </Box>
                </Flex>
                <Flex
                  flexDirection="column"
                  justify="flex-start"
                  align="flex-start"
                  ml="20px"
                  color={colorTextFav}
                >
                  <Heading color={colorNameFav}>{el.tutor}</Heading>
                  <Text>Experience</Text>
                  <Text>
                    {el.exp1} - {el.dur1} years
                  </Text>
                  <Text>
                    {el.exp2} - {el.dur2} years
                  </Text>
                </Flex>
              </Flex>
            </Box>
          )
        })}
      </Box>
    </Flex>
  )
}

export default Favourites
