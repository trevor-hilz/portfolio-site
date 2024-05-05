import React from 'react'
import Summary from './Summary'
import JobHistory from './JobHistory'
import {Box} from '@mui/material'

const MainContent = () => {
  return (
    <Box>
      <Summary />
      <JobHistory />
    </Box>
  )
}

export default MainContent;