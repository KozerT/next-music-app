import { create } from 'zustand';

 type AuthModalStore  ={
  isOpen: boolean;
  onOpen: ()=> void;
  onCLose: ()=> void;
}

const useAuthModal = create<AuthModalStore>((set)=> ({
    isOpen: false,
     onOpen: () => set({isOpen: true}) ,
     onCLose: () => set({isOpen: false}) ,
    })); 

 export default useAuthModal;  