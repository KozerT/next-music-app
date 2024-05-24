import {create}  from "zustand";

interface UploadModalStore{
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  };
 

const useUploadModal =  create<UploadModalStore>(
  (set) => ({
    isOpen: false,
    onOpen: async() => set({ isOpen: true }),
    onClose: async() =>set({ isOpen: false }),
  })
)

export default useUploadModal


