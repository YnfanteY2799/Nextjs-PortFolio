import {
  type ChangeEvent,
  type FocusEvent,
  type ReactElement,
  useState,
  useEffect,
  useRef,
} from "react";

import type { ComboBoxProps, GenericNameValue } from "@/types";

export default function ComboBox({ onSelect, options = [] }: ComboBoxProps): ReactElement {
  // State
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<GenericNameValue | null>(null);
  const [inputValue, setInputValue] = useState("");

  // Ref
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInputClick(): void {
    setIsOpen(true);
    if (inputRef.current) inputRef.current.focus();
  }

  function handleInputBlur({ relatedTarget }: FocusEvent<HTMLInputElement>): void {
    if (!relatedTarget?.classList.contains("combobox-option")) setIsOpen(false);
  }

  function handleInputChange({ target: { value } }: ChangeEvent<HTMLInputElement>): void {
    setInputValue(value);
    setSelectedOption(null);
  }

  const handleOptionClick = (option: GenericNameValue): void => {
    setSelectedOption(option);
    setInputValue(option.name);
    setIsOpen(false);
    onSelect && onSelect(option);
  };

  const filtered = options.filter(({ name }) =>
    name.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    if (selectedOption) setInputValue(selectedOption.name);
    else setInputValue("");
  }, [selectedOption]);

  return (
    <div className="relative inline-block w-full">
      <input
        type="text"
        className="w-full px-4 py-2 mt-2 input input-bordered"
        placeholder="Search ..."
        value={inputValue}
        onClick={handleInputClick}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        ref={inputRef}
      />
      {isOpen && (
        <ul className="absolute z-10 w-full py-1 mt-1 text-gray-700 border border-gray-300 rounded-md shadow-sm bg-secondary">
          {filtered.map((opt) => (
            <li
              key={opt.id}
              className="px-4 py-2 cursor-pointer combobox-option hover:bg-gray-100"
              onClick={() => handleOptionClick(opt)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
