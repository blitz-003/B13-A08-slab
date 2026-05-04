"use client";

import { SearchField } from "@heroui/react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <SearchField
      value={search}
      onChange={(val) => setSearch(val)}
      className="w-[80vw] sm:w-[50vw] mx-auto shadow-4xl my-8"
    >
      <SearchField.Group>
        <SearchField.SearchIcon />
        <SearchField.Input placeholder="Search..." />
        <SearchField.ClearButton />
      </SearchField.Group>
    </SearchField>
  );
};

export default SearchBar;
