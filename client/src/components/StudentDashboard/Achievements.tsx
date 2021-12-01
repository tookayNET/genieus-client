import React from 'react'
import { Box, Flex, Heading, List, ListIcon, ListItem } from '@chakra-ui/react'
import Lottie from 'lottie-react'
import {} from '@chakra-ui/icons'
import { MdCheckCircle, MdRemoveCircleOutline } from 'react-icons/md'

const mainBoxColor: string = '#374151'
const lottieFirework: any = require('../../assets/lottie/firework/83980-fireworkc.json')

const colorsTickBox: string = 'green.500'

const Achievements = () => {
  return (
    <Flex
      bg={'gray.700'}
      borderRadius={'10px'}
      flexDirection="column"
      height="40vh"
      padding={'1rem'}
      mt={12}
    >
      <Flex flexDirection="row" justify={'center'}>
        <Flex justifyContent="center" alignItems="center" pb={5}>
          <Heading as="h1" size="lg" fontWeight="400">
            Achievements
          </Heading>
        </Flex>
      </Flex>

      <List spacing={3} position="relative" zIndex={0}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={colorsTickBox} />
          completed bio
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={colorsTickBox} />
          completed first help request
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={colorsTickBox} />
          member for 3 months
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color={colorsTickBox} />
          favourited a tutor
        </ListItem>
        <ListItem>
          <ListIcon as={MdRemoveCircleOutline} color={colorsTickBox} />5
          JavaScript help requests
        </ListItem>
      </List>
    </Flex>
  )
}

export default Achievements
