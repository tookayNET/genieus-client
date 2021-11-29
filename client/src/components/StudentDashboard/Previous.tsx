import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const prevArr: any = [
  { issue: 'React router', duration: 21, tutor: 'Vic', rating: 4, key: 0 },
  { issue: 'Python', duration: 22, tutor: 'Charlie', rating: 4, key: 1 },
  { issue: 'Figma', duration: 23, tutor: 'Tobias', rating: 4, key: 2 },
  { issue: 'C++', duration: 24, tutor: 'Vic', rating: 4, key: 3 },
  { issue: 'Fortran', duration: 25, tutor: 'Jess', rating: 5, key: 4 },
]

const colorBgPrev: string = "#9CA3AF"
const colorTextPrev: string = "black"

const Previous = () => {
  return (
    // TODO: USE FLATLIST/MP TO POPULATE FAVOURITES FROM SERVER/STATE
    <Flex color={'white'} flexDirection="column" >
      <Heading as="h1" size="xl" fontWeight="600" pt="0" pb="0.5rem">
        {' '}
        Previous
      </Heading>

      <Flex
        flexDirection="row"
        justify="flex-start"
        width={'100%'}
        // overflow={"scroll"}
        overflowY={'auto'}
        sx={{
          '&::-webkit-scrollbar': {
            width: '30px',
            borderRadius: '8px',
            backgroundColor: `rgba(150, 150, 190, 0.15)`,
          },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: '8px',
            backgroundColor: `rgba(160, 160, 230, 0.45)`,
          },
        }}
      >
        {prevArr.map((el: any) => {
          return (
            <Box key={el.key}>
              <Flex
                flexDirection="column"
                mr="1rem"
                mb="1rem"
                color={colorTextPrev}
                bg={colorBgPrev}
                p={'0.5rem'}
                borderRadius={'1rem'}
                border="solid"
                width="300px"
              >
                <Text>Issue solved - {el.issue}</Text>
                <Text>Duration - {el.duration}m</Text>
                <Text>Tutor - {el.tutor}</Text>
                {/* TODO: CHANGE TO STAR RATING */}
                <Text>Rating - {el.rating}</Text>
              </Flex>
            </Box>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Previous
