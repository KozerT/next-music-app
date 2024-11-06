"use client"

import Box from "@/components/Box"
import { BeatLoader } from "react-spinners"

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <BeatLoader color="#ea1870" size={30} />
    </Box>
  )
}

export default Loading
