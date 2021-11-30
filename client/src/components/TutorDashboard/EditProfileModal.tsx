import React, { useState } from 'react'

import {
  Modal,
  // ModalOverlay,
  ModalContent,
  // ModalCloseButton,
  // ModalHeader,
  // ModalFooter,
  ModalBody,
  Textarea,
  Stack,
  // Heading,
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  Center,
} from '@chakra-ui/react'
// import Logo from '../../assets/icons/logo.svg'

// import { SmallCloseIcon } from '@chakra-ui/icons'

//@ts-ignore
const EditProfileModal = ({ isOpen, onClose }) => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginpassword, setLoginPassword] = useState('')

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent fontFamily="montserrat">
        <ModalBody>
          <Flex bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
              spacing={4}
              w={'full'}
              maxW={'md'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={6}
            >
              <FormControl id="userName">
                <FormLabel>User Icon</FormLabel>
                <Stack direction={['column', 'row']} spacing={6}>
                  <Center>
                    <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                      <AvatarBadge
                        size="sm"
                        top="-10px"
                        colorScheme="red"
                        aria-label="remove Image"
                      />
                    </Avatar>
                  </Center>
                  <Center w="full">
                    <Button w="full">Change Icon</Button>
                  </Center>
                </Stack>
              </FormControl>
              <FormControl id="userName" isRequired>
                <FormLabel>Location</FormLabel>
                <Input _placeholder={{ color: 'gray.500' }} type="text" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Non-tech languages</FormLabel>
                <Input _placeholder={{ color: 'gray.500' }} />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Tech languages</FormLabel>
                <Input _placeholder={{ color: 'gray.500' }} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Bio</FormLabel>
                <Textarea placeholder="Bio" />
              </FormControl>
              <Stack spacing={6} direction={['column', 'row']}>
                <Button
                  onClick={onClose}
                  bg={'red.400'}
                  color={'white'}
                  w="full"
                  _hover={{
                    bg: 'red.500',
                  }}
                >
                  Cancel
                </Button>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  w="full"
                  _hover={{
                    bg: 'blue.500',
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default EditProfileModal
