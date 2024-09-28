import React from "react";

interface HeaderProps {
  handleToggleDarkMode: (value: (prevDarkMode: boolean) => boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h3>Notes</h3>
      <button
        className="save"
        onClick={() => handleToggleDarkMode((prevDarkMode) => !prevDarkMode)}
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
