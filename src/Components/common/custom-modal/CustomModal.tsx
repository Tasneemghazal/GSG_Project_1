import { Box, Modal,Typography } from "@mui/material";
import { ModalMode } from "../../../types/@types";
import { modal, symptom, symptomTitle } from "./custom-modal.style";
import AddNote from "../../doctorComponents/add-note/AddNote";

interface IProps {
  open: boolean;
  handleClose: () => void;
  selectedSymptom: string;
  mode: string;
  appointmentId: string;
}

const CustomModal = ({
  open,
  handleClose,
  selectedSymptom,
  mode,
  appointmentId,
}: IProps) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
      {mode === ModalMode.SYMPTOM ? (
        <Box sx={modal}>
          <Typography sx={symptomTitle}>Patient Symptoms:</Typography>
          <Typography sx={symptom}>{selectedSymptom}</Typography>
        </Box>
      ) : (
        <AddNote handleClose={handleClose} appointmentId={appointmentId}/>
      )}
    </Modal>
  );
};

export default CustomModal;


