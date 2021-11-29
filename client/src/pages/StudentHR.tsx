import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import TopBar from '../components/StudentHR/TopBar'
import HrContent from '../components/StudentHR/HrContent'
import BottomBar from '../components/StudentHR/ButtonBar'
import TutorFound from '../components/StudentHR/TutorFound'

import Split from 'react-split'

const StudentHR = () => {
  const [tutorComplete, settutorComplete] = useState(false)

  return (
    <Box>
      <TopBar />
      <HrContent settutorComplete={settutorComplete} />
      {tutorComplete && (
        <Box mt={10} p={0}>
          <TutorFound />
        </Box>
      )}
    </Box>
  )
}

export default StudentHR
