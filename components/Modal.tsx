import * as Dialog from '@radix-ui/react-dialog';

type ModalProps = {
    isOpen: boolean;
    onChange: (open:boolean) => void; 
    title: string;
    children: React.ReactNode;
    description: string;
}

const Modal: React.FC<ModalProps> = ({isOpen,onChange, title,children, description  }) => {
  return (
    <Dialog.Root open={isOpen}
     defaultOpen={isOpen} 
     onOpenChange={onChange}  >
        <Dialog.Portal>
            <Dialog.Overlay className=' bg-neutral-800/90 backdrop-blur-sm fixed inset-0' />
            <Dialog.Content></Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Modal
