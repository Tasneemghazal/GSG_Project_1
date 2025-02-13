// styles.ts
import { FormControl, TextField } from "@mui/material";
import { styled } from '@mui/system';

export const StyledFormControl = styled(FormControl)({
  width: '100%',
  margin: "0",
});

export const StyledTextField = styled(TextField)({
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