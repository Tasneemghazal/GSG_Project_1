import { Box, Modal,Typography } from "@mui/material";
import { ModalMode } from "../../types/@types";
import { modal, symptom, symptomTitle } from "./custom-modal.style";
import AddNote from "../doctorComponents/add-note/AddNote";

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
      {mode === ModalMode.SYMPTOM ? (
        <Box sx={modal}>
          <Typography sx={symptomTitle}>Patient Symptoms:</Typography>
          <Typography sx={symptom}>{selectedSymptom}</Typography>
        </Box>
      ) : (
        <AddNote note={note} addNote={addNote} handleClose={handleClose}/>
      )}
    </Modal>
  );
};

export default CustomModal;


