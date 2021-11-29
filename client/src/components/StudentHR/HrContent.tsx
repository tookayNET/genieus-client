import React, { useState } from 'react'
import Editor from 'react-simple-code-editor'
import ButtonBar from './ButtonBar'

//@ts-ignore
//@ts-ignore
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import {
  Grid,
  Box,
  Checkbox,
  Button,
  GridItem,
  Heading,
  Flex,
  Select,
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
  const [loading, setloading] = useState(false)

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  const getHRData = () => {

    console.log(`${codeValue}, ${value}`)
  }

  return (
    <Box>
      <Grid
        p={10}
        h={'70vh'}
        templateRows="1fr 0.3fr"
        templateColumns="repeat(2, 1fr)"
        gap={10}
      >
        {/* Description Box */}

        <GridItem id="one">
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

        <GridItem id="two">
          <Flex
            alignItems="center"
            direction="row"
            justifyContent="space-between"
          >
            <Heading
              className="myHeader"
              fontSize={30}
              fontWeight={200}
              as="h5"
            >
              Code Sample
            </Heading>
            <Select
              colorScheme="indigo"
              borderColor="indigo.300"
              w={'200px'}
              variant="outline"
              placeholder="Select language"
              isRequired
            >
              <option value="option1">JavaScript</option>
              <option value="option2">Python</option>
              <option value="option3">C++</option>
            </Select>
          </Flex>
          <Box mt={4} borderRadius={5} border="1px solid" minH={'50vh'}>
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
                minHeight: '50vh',
              }}
            />
          </Box>
        </GridItem>
      </Grid>

      {/* Bottom Nar */}
      <ButtonBar getHRData={getHRData} />
    </Box>
  )
}

export default HrContent
