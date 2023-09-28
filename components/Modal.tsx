import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-[50%] top-[50%] h-full max-h-full w-full translate-x-[-50%] translate-y-[-50%] rounded-md bg-backgroundLight p-[20px] shadow-Light focus:outline-none dark:bg-backgroundDark dark:shadow-Dark md:h-auto md:max-h-[85vh] md:w-[90vw] md:max-w-[450px]">
          <Dialog.Title className="mb-4 text-center text-xl font-bold">
            {title}
          </Dialog.Title>
          <Dialog.Description className="mb-5 text-center text-sm leading-normal">
            {description}
          </Dialog.Description>
          <div>{children}</div>
          <Dialog.Close asChild>
            <button className="absolute right-0 top-0 inline-flex h-8 w-8 appearance-none items-center justify-center rounded-bl-lg bg-primary text-dark transition hover:bg-alert hover:text-light focus:outline-none">
              <IoMdClose size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
