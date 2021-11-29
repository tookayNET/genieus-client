import React, { useState } from 'react'
import Editor from 'react-simple-code-editor'
//@ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import {
  Grid,
  Box,
  GridItem,
  Heading,
  Flex,
  HStack,
  Text,
  Tag,
  TagLabel,
  Textarea,
} from '@chakra-ui/react'

const HrContent = () => {
  const code = `function add(a, b) {
    return a + b;
  }
  `
  const [value, setValue] = useState('')
  const [codeValue, setcodeValue] = useState(code)

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  return (
    <Grid p={10} h={'70vh'} templateColumns="repeat(2, 1fr)" gap={10}>
      {/* Description Box */}

      <GridItem>
        <Flex direction="row" justify="space-between" alignItems="center">
          <Heading fontSize={30} fontWeight={200} as="h5">
            Description
          </Heading>
          <HStack spacing={5}>
            <Tag variant="solid" size="lg" colorScheme="indigo">
              <TagLabel>#redux</TagLabel>
            </Tag>
            <Tag variant="solid" size="lg" colorScheme="indigo">
              <TagLabel>#react</TagLabel>
            </Tag>
            <Tag variant="solid" size="lg" colorScheme="indigo">
              <TagLabel>#javascript</TagLabel>
            </Tag>
          </HStack>
        </Flex>

        <Box pt={5}>
          <Textarea
            onChange={handleInputChange}
            isRequired
            value={value}
            height={'50vh'}
            placeholder="<!-- Please describe you issue in detail....  -->"
          />
        </Box>
      </GridItem>
      {/* End of Description Area */}

      <GridItem>
        <Heading fontSize={30} fontWeight={200} as="h5">
          Code Sample
        </Heading>
        <Box mt={5} borderRadius={5} border="1px solid" h={'50vh'}>
          <Editor
            value={codeValue}
            //@ts-ignore
            onValueChange={(code) => setcodeValue(code)}
            highlight={(code) => highlight(code, languages.js)}
            padding={15}
            tabSize={2}
            style={{
              fontSize: 15,
              fontFamily: 'Monaco',
            }}
          />
        </Box>
      </GridItem>
    </Grid>
  )
}

export default HrContent
