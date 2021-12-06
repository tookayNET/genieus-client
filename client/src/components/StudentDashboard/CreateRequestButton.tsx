import React from 'react'
import {
  Button,
  Flex,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'

const buttonColorPurple = '#A78BFA'

// TODO: NOT SURE THIS IS THE TEXTBOOK IMPLEMENTATION OF REACT ROUTING
const CreateRequestButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const navigate = useNavigate()

  const handleClick = () => {
    console.log('Create request clicked - not yet implemented')
    navigate('/student-hr')
  }

  return (
    <Flex justify={'flex-start'} align={'center'} height={'100%'}>
      <Button
        _hover={{
          bgGradient: useColorModeValue(
            'linear(to-r, blue.500, teal.300)',
            'linear(to-r, blue.300, teal.100)'
          ),
          color: useColorModeValue('white', 'black'),
        }}
        borderRadius={'10px'}
        variant="outline"
        boxShadow="base"
        fontSize="3xl"
        fontWeight={500}
        ml={8}
        height={'100%'}
        onClick={handleClick}
        width={'20rem'}
      >
        Create Request
      </Button>
    </Flex>
  )
}

export default CreateRequestButton
function mode(arg0: string, arg1: string) {
  throw new Error('Function not implemented.')
}
