'use client'

import AuthModal from "@/components/AuthModal";


import { useEffect, useState } from "react"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=> {
        setIsMounted(true) // non of the modals could be seen or open during the server side rendering 
    }, [])

    if(!isMounted) {
        return null; 
    }

  return (
<>
    <AuthModal/>
      </>
  )
}

export default ModalProvider
