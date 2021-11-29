import React, { useState } from 'react'
import { Box, Flex, Text, Checkbox, Button, Link } from '@chakra-ui/react'
import Split from 'react-split'

const ButtonBar = ({
  getHRData,
  loadingBtn,
  setloadingBtn,
  settutorComplete,
}: any) => {
  return (
    <Flex
      px="10"
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="space-around"
    >
      <Flex>
        <Checkbox size="lg" colorScheme="indigo" pr={5}></Checkbox>

        <Text fontFamily="sans-serif" letterSpacing={2} lineHeight={7}>
          Click here to wait for your favourites <br />{' '}
          <Text letterSpacing={1} fontSize={15} opacity={0.5}>
            Expect a longer wait time...{' '}
          </Text>
        </Text>
      </Flex>

      {!loadingBtn === true ? (
        <Link href="#link-header">
          <Button
            onClick={() => {
              setTimeout(() => {
                settutorComplete(true)
                setloadingBtn(false)
              }, 3000)
              setloadingBtn(true)
            }}
            ml={105}
            letterSpacing={2}
            colorScheme="indigo"
            variant="outline"
            padding={8}
          >
            Submit
          </Button>
        </Link>
      ) : (
        <Flex justifyContent="center" alignItems="center" direction="column">
          <Button
            isLoading
            loadingText="Finding Tutor"
            ml={105}
            letterSpacing={2}
            colorScheme="indigo"
            variant="outline"
            padding={8}
          ></Button>
          <Button
            onClick={() => setloadingBtn(false)}
            letterSpacing={1}
            mr={50}
            _hover={{ bg: 'none', opacity: 0.6 }}
            variant="ghost"
          >
            Cancel
          </Button>
        </Flex>
      )}

      <Box>
        <Text letterSpacing={1}>
          You can continue to update your request after submitting
        </Text>
      </Box>
    </Flex>
  )
}

export default ButtonBar
