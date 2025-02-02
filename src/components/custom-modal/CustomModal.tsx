import { Box, Modal, Typography } from "@mui/material";
import { modal, symptom, symptomTitle } from "./custom-modal.style";

interface IProps {
  open: boolean;
  handleClose: () => void;
  selectedSymptom: string;
}
const CustomModal = ({ open, handleClose, selectedSymptom }: IProps) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
      <Box sx={modal}>
        <Typography sx={symptomTitle}>
          Patient Symptoms: 
        </Typography>
        <Typography sx={symptom}>{selectedSymptom}</Typography>
      </Box>
    </Modal>
  );
};

export default CustomModal;
