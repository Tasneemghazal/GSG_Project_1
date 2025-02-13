import { Box, Button, TextField, Typography } from "@mui/material";
import { modal } from "../../custom-modal/custom-modal.style";
import { Title } from "./AddNote.style";
import { forwardRef, useState } from "react";
import useAppointmentContext from "../../../hooks/useAppointment";
interface NoteModalProps {
  appointmentId: string;
  handleClose: () => void;
}
const AddNote = forwardRef<HTMLDivElement, NoteModalProps>(({ handleClose, appointmentId }, ref) => {
  const [note, setNote] = useState("");
  const { addNote } = useAppointmentContext();

  const handleSubmit = () => {
    addNote(note, appointmentId);
    handleClose();
  };

  return (
    <Box sx={modal} ref={ref} tabIndex={0}>
      <Typography sx={Title}>Add Note:</Typography>
      <TextField
        fullWidth
        variant="outlined"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter note here..."
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Save
      </Button>
    </Box>
  );
});

export default AddNote;
