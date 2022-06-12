// 뉴스 기사 검색창
import React, { useState } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  display: block;
  margin: 10px auto;
  width: 50vw;
  padding: 10px;
`;

const Btn = styled.button`
  display: block;
  margin: 10px auto;
  width: 50vw;
`;

function Input() {
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    const {
      target: { value },
    } = e;
    setSearch(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <form onSubmit={onSubmit}>
      <SearchInput
        type="text"
        value={search}
        onChange={onSearch}
        placeholder="Search"
      />
    </form>
  );
}

export default Input;
