import React, { useState, useEffect } from "react";

const DropDown: React.FC<{ text: string }> = ({ text }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        // Escape(ESC) key
        setIsDropdownActive(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleDropdownBlur = () => {
    setIsDropdownActive(false);
  };
  return (
    <div>
      <button
        aria-label="Dropdown"
        aria-haspopup="true"
        aria-expanded={isDropdownActive}
        onClick={toggleDropdown}
        onBlur={handleDropdownBlur}
        className="dropdown-button"
      >
        {text}
      </button>
      {isDropdownActive && (
        <ul className="dropdown" role="menu">
          <li>
            <a href="/dropdown-item-1" role="menuitem">
              Dropdown Item 1
            </a>
          </li>
          <li>
            <a href="/dropdown-item-2" role="menuitem">
              Dropdown Item 2
            </a>
          </li>
          <li>
            <a href="/dropdown-item-1" role="menuitem">
              Dropdown Item 3
            </a>
          </li>
          <li>
            <a href="/dropdown-item-2" role="menuitem">
              Dropdown Item 4
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDown;
