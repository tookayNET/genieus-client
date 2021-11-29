import React, {useState} from 'react'
import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'

import { SettingsIcon } from '@chakra-ui/icons'

// TODO: DUMMY OBJECT - PULL FROM DATABASE
const userDetailsObj: any = {
  name: 'David',
  tier: 'Pro',
  avatar: 'https://bit.ly/sage-adebayo',
}

// TODO: SWAP X-Y-Z FOR ICONS/IMAGES
function tierIcon(tier: string) {
  if (tier === 'Pro') {
    return 'X'
  } else if (tier === 'Budget') {
    return 'Y'
  } else {
    return 'Z'
  }
}

const CornerProfile = () => {

  const [userDetails, setUserDetails] = useState(userDetailsObj)
  
  return (
    <Flex flexDirection={'row'} color={'white'} justify={'flex-end'}>
      <Flex flexDirection={'column'} mr="5">
        <Heading as={'h3'} fontSize={'2xl'} fontWeight={500}>
          Welcome {userDetails.name}
        </Heading>
        <Text>
          {userDetails.tier} Tier {tierIcon(userDetails.tier)}
        </Text>

        <IconButton
          // TODO: ICON IS TOO DARK IN DARK MODE
          colorScheme="white"
          aria-label="Edit Profile"
          icon={<SettingsIcon />}
          size="small"
          h="20px"
          w="20px"
        />
      </Flex>
      <Box position="relative">
        <Image
          boxSize="8rem"
          borderRadius="4rem"
          src={userDetails.avatar}
        />
      </Box>
    </Flex>
  )
}

export default CornerProfile
