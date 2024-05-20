import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  description: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  children,
  description,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onChange} defaultOpen={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className=" bg-neutral-800/90 backdrop-blur-sm fixed inset-0" />
        <Dialog.Content className="fixed drop-shadow-md border border-neutral-600 top-[50%] left-[50%] max-h-full md:max-h-[85vh]  w-full md:w-[90vw] md:max-w-[450px] translate-x-[-50%]  translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus-outline-none">
          <Dialog.Title className="text-xl text-center font-center font-bold mb-4">
            {title}
          </Dialog.Title>
          <Dialog.Description className="text-center text-sm mb-5 leading-normal">
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className="absolute inline-flex  top-[10px] right-[10px] text-neutral-500 hover:text-neutral-50 w-[26px] h-[26px] appearance-none items-center justify-center rounded-full focus:outline-none " >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
