import React, { useState } from 'react'
import { Box, Flex, Text, Checkbox, Button } from '@chakra-ui/react'
import Split from 'react-split'

const ButtonBar = ({ getHRData }: any) => {
  const [loadingBtn, setloadingBtn] = useState(false)
  return (
    <Flex
      px="10"
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="space-around"
    >
      <Flex>
        <Checkbox
          size="lg"
          colorScheme="indigo"
          pr={5}
          defaultIsChecked
        ></Checkbox>

        <Text fontFamily="sans-serif" letterSpacing={2} lineHeight={10}>
          Click here to wait for your favorite <br /> Expect a longer wait
          time...
        </Text>
      </Flex>

      {/* <Button
      
        loadingText="Finding Tutor"
        onClick={getHRData}
        ml={105}
        letterSpacing={2}
        colorScheme="indigo"
        variant="outline"
        padding={8}
      >
        Submit Request
      </Button> */}

      {!loadingBtn === true ? (
        <Button
          onClick={() => setloadingBtn(true)}
          ml={105}
          letterSpacing={2}
          colorScheme="indigo"
          variant="outline"
          padding={8}
        >
          Submit
        </Button>
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
