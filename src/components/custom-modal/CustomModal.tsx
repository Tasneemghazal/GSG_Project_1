import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { modal, symptom, symptomTitle } from "./custom-modal.style";

interface IProps {
  open: boolean;
  handleClose: () => void;
  selectedSymptom: string;
  mode: string;
  note: string;
  addNote: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomModal = ({
  open,
  handleClose,
  selectedSymptom,
  mode,
  addNote,
  note,
}: IProps) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
      {mode === "SYMPTOM" ? (
        <Box sx={modal}>
          <Typography sx={symptomTitle}>Patient Symptoms:</Typography>
          <Typography sx={symptom}>{selectedSymptom}</Typography>
        </Box>
      ) : (
        <Box sx={modal}>
          <Typography sx={symptomTitle}>Add Note:</Typography>
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
      )}
    </Modal>
  );
};

export default CustomModal;
