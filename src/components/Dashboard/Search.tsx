import { FormControl, TextField, InputAdornment, Container } from "@mui/material";
import { styled } from '@mui/system'; // Import styled from @mui/system
import { Clear as ClearIcon } from "@mui/icons-material"; // Use the correct icon import
import React, { FunctionComponent, useState } from "react";
import { FaSearch } from "react-icons/fa";

// Styled component
const StyledFormControl = styled(FormControl)({
  width: '100%', // Make the FormControl take full width
  margin: "0",
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'grey', 
    },
    '&:hover fieldset': {
      borderColor: '#3572EF', 
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3572EF',
    },
  },
});

const Search: FunctionComponent = () => {
  const [showClearIcon, setShowClearIcon] = useState<"none" | "flex">("none");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
  };

  const handleClick = (): void => {
    // TODO: Clear the search input
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