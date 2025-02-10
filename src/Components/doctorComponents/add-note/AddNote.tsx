import { Box, Button, TextField, Typography } from "@mui/material";
import { modal } from "../../custom-modal/custom-modal.style";
import { Title } from "./AddNote.style";

interface NoteModalProps {
  note: string;
  addNote: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClose: () => void;
}

const AddNote = ({ note, addNote, handleClose }: NoteModalProps) => {
  return (
    <Box sx={modal}>
      <Typography sx={Title}>Add Note:</Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={note}
        onChange={addNote}
        placeholder="Enter note here..."
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleClose}>
        Save
      </Button>
    </Box>
  );
};

export default AddNote;
