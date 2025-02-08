import { InputAdornment, Container } from "@mui/material";
import { Clear as ClearIcon } from "@mui/icons-material"; 
import React, { FunctionComponent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { StyledFormControl, StyledTextField } from "./Search.style";

const Search: FunctionComponent = () => {
  const [showClearIcon, setShowClearIcon] = useState<"none" | "flex">("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = (): void => {
    console.log("clicked the clear icon...");
  };

  return (
    <Container>
      <StyledFormControl>
        <StyledTextField
          size="small"
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment
                position="end"
                style={{ display: showClearIcon }}
                onClick={handleClick}
              >
                <ClearIcon />
              </InputAdornment>
            )
          }}
        />
      </StyledFormControl>
    </Container>
  );
};

export default Search;