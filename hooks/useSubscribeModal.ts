import {create}  from "zustand";

interface SubscribeModalStore{
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
 };

 const useSubscribeModal = create<SubscribeModalStore>((set) => ({
   isOpen: false,
   onOpen: async() =>set({ isOpen: true }),
   onClose: async() =>set({ isOpen: false }),
 }));
 

 export default useSubscribeModal;  