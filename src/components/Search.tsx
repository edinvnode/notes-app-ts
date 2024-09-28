import React from "react";
import { MdSearch } from "react-icons/md";

interface Props {
  handleSearchNote: React.Dispatch<React.SetStateAction<string>>;
}

function Search({ handleSearchNote }: Props) {
  return (
    <div className="search">
      <MdSearch className="Search-icons" size="1.3em" />
      <input
        type="text"
        placeholder="type to search"
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  );
}

export default Search;
