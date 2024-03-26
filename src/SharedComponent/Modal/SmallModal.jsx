import { useEffect, useRef } from "react";
import {PiWarningBold} from "react-icons/pi"
import Transition from "./utilities/Transition";

function SmallModal({ title, modalOpen, setModalOpen, modalContent }) {
  const modalContentRef = useRef(null);
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  return (
    <div className={`${modalOpen === true ? "block" : "hidden"}`}>
      {/* Modal backdrop */}
      <Transition
        className={`fixed inset-0 z-[999] bg-slate-900 bg-opacity-30 transition-opacity ${modalOpen && 'backdrop-blur-sm overflow-hidden'}`}
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterstart="opacity-0"
        enterend="opacity-100"
        leave="transition ease-out duration-100"
        leavestart="opacity-100"
        leaveend="opacity-0"
        aria-hidden="true"
      />

      {/* Modal dialog */}
      <Transition
        className="fixed inset-0 top-44 z-[999] mb-4 flex transform items-start justify-center overflow-hidden px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterstart="opacity-0 translate-y-4"
        enterend="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leavestart="opacity-100 translate-y-0"
        leaveend="opacity-0 translate-y-4"
      >
        <div
          ref={modalContentRef}
          className={`max-h-full w-full max-w-fit overflow-auto rounded-2xl bg-secondBackground py-[17px] pb-[20px] shadow-lg`}
        >
          <h1 className="px-[30px] border-b mb-3 text-left font-inter text-[16px] font-medium text-[#F76868] md:text-[18px] gap-[2px] lg:text-[20px] flex items-center pb-[6px]">
            <span className="text-[22px] "><PiWarningBold size={22} /></span>{title}
          </h1>
          <div className="px-[30px]">{modalContent}</div>
        </div>
      </Transition>
    </div>
  );
}

export default SmallModal;