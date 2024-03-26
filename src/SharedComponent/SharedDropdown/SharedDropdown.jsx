import { useContext } from "react";
import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AuthContext } from "../../Providers/AuthProvider";

const SharedDropdown = ({ label, options, setDropdownValues, value }) => {
  // console.log('value', value);
  const {selectedOption, setSelectedOption} = useContext(AuthContext);
  const [operatorOption, setOperatorOption] = useState(false);
  const inputRef = useRef(null);
  const ulRef = useRef(null);

  const keyName = label.replace("_", " ");

  const handleSelectChange = (text) => {
    setSelectedOption(text);
    setOperatorOption(false);
  };

  const handleInputBlur = () => {
    if (selectedOption === "") {
      setOperatorOption(true);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        ulRef.current &&
        !ulRef.current.contains(e.target)
      ) {
        setOperatorOption(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    const handleDropdownValueChange = (name, value) => {
      setDropdownValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };
    handleDropdownValueChange(label, selectedOption ? selectedOption : "");

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [selectedOption]);

  return (
    <div className="">
      <div className="">
        <div className="">
          <label
            htmlFor=""
            className="text-base capitalize font-montserrat font-normal text-white"
          >
            <span className="text-primary font-medium">Change</span> {keyName}
          </label>
          <div className="relative text-base font-montserrat mt-1">
            <div
              ref={inputRef}
              onClick={() => setOperatorOption(!operatorOption)}
              onBlur={handleInputBlur}
              className="flex items-center gap-2 justify-between border border-slate-500 rounded-md py-[7px] px-2 cursor-pointer"
            >
              <p className="select-none capitalize font-montserrat font-normal text-white">
                {selectedOption === '' && selectedOption !== value ? value : selectedOption}
              </p>
              <span
                className={`${
                  operatorOption ? "rotate-180" : "rotate-0"
                } duration-300 text-gray-500`}
              >
                <IoIosArrowDown size={17} />
              </span>
            </div>

            <ul
              ref={ulRef}
              className={`absolute left-0 z-50 bg-secondBackground right-0 p-3 px-3 font-normal font-montserrat rounded-md border border-slate-500 shadow-md mt-1 gap-y-[6px] flex flex-col ${
                operatorOption ? "block" : "hidden"
              }`}
            >
              {options.map((name, index) => (
                <li
                  className="border border-slate-500 select-none rounded-md capitalize py-[5px] px-2 cursor-pointer hover:bg-[#1f4d70]"
                  key={index}
                  onClick={() => handleSelectChange(name)}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedDropdown;
