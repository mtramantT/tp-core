import React from "react";
import styled from "styled-components";

interface SearchBarProps {}

const Container = styled.div``;
const StyledInput = styled.input``;

const SearchBar: React.FC<SearchBarProps> = (props: SearchBarProps) => {
  const {} = props;
  return (
    <Container>
      <StyledInput type="search" placeholder="search" />
    </Container>
  );
};

export default SearchBar;
