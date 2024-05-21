'use client'

import useUploadModal from "@/hooks/useUploadModal"
import Modal from "./Modal"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";

const UploadModal = () => {
  const uploadModal = useUploadModal();
  const [isLoading, setIsLoading]=useState();

  const  {reset, register, handleSubmit} = useForm<FieldValues>({
    defaultValues: {
        author: '',
        title: '',
        song: null,
        image: null
    }
  })

  const onChange = (open: boolean)=> {
  if(!open){
    reset();
    uploadModal.onClose()
  }
  }

  const onSubmit : SubmitHandler<FieldValues> = async(values) => {
    
  }

  return (
    <Modal 
    title="Add a sog"
    description="Upload an mp3 file"
    isOpen={uploadModal.isOpen}
    onChange={onChange}>
     <form onSubmit={onSubmit}>
    <Input id='title'
    disabled={isLoading}
    placeholder='Song Title'
    {...register('title', {required: true})}/>
     </form>
    </Modal>
  )
}

export default UploadModal
