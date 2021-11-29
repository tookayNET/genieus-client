import React from 'react'
import { Box } from '@chakra-ui/react'
import TopBar from '../components/StudentHR/TopBar'
import HrContent from '../components/StudentHR/HrContent'
import BottomBar from '../components/StudentHR/ButtonBar'
import Split from 'react-split'

const StudentHR = () => {
  return (
    <Box>
      <TopBar />
      <HrContent />
      {/* <BottomBar /> */}
    </Box>
  )
}

export default StudentHR
