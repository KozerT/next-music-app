import {create}  from "zustand";

interface AuthModalStore{
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
 };

 const useAuthModal = create<AuthModalStore>((set) => ({
   isOpen: false,
   onOpen: async() => {set({ isOpen: true })},
   onClose: async() =>{ set({ isOpen: false })},
 }));
 

 export default useAuthModal;  

