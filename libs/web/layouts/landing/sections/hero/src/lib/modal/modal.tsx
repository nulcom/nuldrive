import { ReactChild, useRef, useEffect } from 'react';
import styles from './modal.module.css';
import { WebUtilTransition } from '@nuldrive/web/util/transition';

/* eslint-disable-next-line */
export interface ModalProps {
  children: ReactChild;
  id: any;
  ariaLabel: any;
  show: any;
  handleClose: any;
}

export function Modal(props: ModalProps) {
  const { children, id, ariaLabel, show, handleClose } = props;
  const modalContent = useRef<any>(null);

  // close the modal on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: any }) => {
      if (!show || modalContent.current.contains(target)) return;
      handleClose();
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the modal if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: any }) => {
      if (keyCode !== 27) return;
      handleClose();
    };
    document.addEventListener('keydown', keyHandler);

    return () => document.removeEventListener('keydown', keyHandler);
  });
  return (
    <>
      {/* Modal backdrop */}
      <WebUtilTransition
        className="fixed inset-0 z-50 bg-slate-800 bg-opacity-75 transition-opacity backdrop-blur-sm"
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />

      {/* Modal dialog */}
      <WebUtilTransition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabel}
        show={show}
        enter="transition ease-out duration-200"
        enterStart="opacity-0 scale-95"
        enterEnd="opacity-100 scale-100"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100 scale-100"
        leaveEnd="opacity-0 scale-95"
      >
        <div
          className="bg-white overflow-auto max-w-6xl w-full max-h-full"
          ref={modalContent}
        >
          {children}
        </div>
      </WebUtilTransition>
    </>
  );
}

export default Modal;
