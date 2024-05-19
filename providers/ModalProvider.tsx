'use client'

import Modal from "@/components/Modal";

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
      <Modal title="Test Modal" description="Test" isOpen onChange={()=> {}}>
        Test
      </Modal>
      </>
  )
}

export default ModalProvider
