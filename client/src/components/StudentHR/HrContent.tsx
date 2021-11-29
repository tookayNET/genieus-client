import React, { useState } from 'react'
import Split from 'react-split'
import ButtonBar from './ButtonBar'
import Editor from '@monaco-editor/react'
import '../../styles/example.css'

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

const HrContent = ({ settutorComplete }: any) => {
  const code = `function add(a, b) {
    return a + b;
  }
  `
  const [value, setValue] = useState('')
  const [codeValue, setcodeValue] = useState(code)
  const [loading, setloading] = useState(false)
  const [loadingBtn, setloadingBtn] = useState(false)

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  const getHRData = () => {
    console.log(`${codeValue}, ${value}`)
  }

  return (
    <Box>
      <Grid p={10} templateColumns="repeat(2, 1fr)" gap={10}>
        {/* Description Box */}

        <Split
          className="split"
          sizes={[50, 50]}
          expandToMin={false}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          cursor="col-resize"
        >
          <div className="split-one">
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
          </div>

          {/* End of Description Area */}
          <div className="split-two">
            <GridItem id="two">
              <Flex
                alignItems="center"
                direction="row"
                justifyContent="space-between"
              >
                <Heading fontSize={30} fontWeight={200} as="h5">
                  Code Sample
                </Heading>
                <Select
                  colorScheme="indigo"
                  borderColor="indigo.300"
                  maxW={'200px'}
                  variant="outline"
                  placeholder="Select language"
                  isRequired
                >
                  <option value="option1">JavaScript</option>
                  <option value="option2">Python</option>
                  <option value="option3">C++</option>
                </Select>
              </Flex>
              <Box
                mt={4}
                border="1px solid"
                borderColor="gray.600"
                minH={'50vh'}
              >
                <Editor
                  height="50vh"
                  defaultLanguage="javascript"
                  defaultValue="// Please describe your problem..."
                  value={codeValue}
                  onChange={(e: any) => setcodeValue(e.target.value)}
                  theme="vs-dark"
                />
              </Box>
            </GridItem>
          </div>
        </Split>
      </Grid>

      {/* Bottom Nar */}
      <ButtonBar
        settutorComplete={settutorComplete}
        loadingBtn={loadingBtn}
        setloadingBtn={setloadingBtn}
        getHRData={getHRData}
      />
    </Box>
  )
}

export default HrContent
