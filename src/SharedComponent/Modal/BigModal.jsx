import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import Transition from "./utilities/Transition";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const BigModal = ({ title, modalOpen, setModalOpen, modalContent }) => {
  const { setSelectedOption } = useContext(AuthContext);
  const modalContentRef = useRef(null);

  // Based on modal open
  useEffect(() => {
    if (!modalOpen) setSelectedOption("");
  }, [modalOpen]);

  
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  const handleClick = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };
  return (
    <div className={`${modalOpen === true ? "block" : "hidden"}`}>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 z-50 backdrop-blur-[2px] bg-slate-900 bg-opacity-30 transition-opacity"
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
        className="fixed inset-0 top-[40px] z-50 flex transform items-start justify-center overflow-hidden"
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
          className={`h-[450px] overflow-y-scroll w-11/12 max-w-[600px] overflow-auto rounded-2xl bg-secondBackground py-5`}
        >
          <div className="bg-secondBackground px-[0] w-full">
            <div className="flex items-center justify-between px-[24px] lg:px-[35px] xl:px-[30px]">
              <h3 className="font-inter text-[18px] font-semibold leading-[31.2px] text-secondBlack md:text-[21px] lg:text-[24px]">
                {title}
              </h3>
              <div className="modal-action m-0">
                <li onClick={(e) => handleClick(e)} className="list-none">
                  <button className="hover:text-primary">
                    <IoClose size={28} />
                  </button>
                </li>
              </div>
            </div>
            <div className="border-b my-1"></div>
            <div className="px-[24px] w-full lg:px-[35px] mt-4 xl:px-[30px]">
              <div className="mb-[30px]">{modalContent}</div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default BigModal;
