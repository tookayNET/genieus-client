import React from 'react'
import { Heading, Box, Flex } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const TopBar = () => {
  return (
    <Flex direction="row" alignItems="center" justifyContent="center">
      <Box
        _hover={{ color: 'indigo.300', cursor: 'pointer' }}
        position="absolute"
        left={50}
        top={10}
        opacity={0.6}
      >
        <FontAwesomeIcon size="2x" icon={faArrowLeft} />
      </Box>
      <Heading
        fontFamily="sans-serif"
        fontWeight={300}
        color="indigo.300"
        letterSpacing={3.5}
        pt={8}
        as="h2"
        colorScheme="indigo"
      >
        Your Help Request
      </Heading>
    </Flex>
  )
}

export default TopBar
