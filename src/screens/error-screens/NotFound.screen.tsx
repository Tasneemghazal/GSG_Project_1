import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { container } from "./errorScreen.style";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={container}
    >
      <img src="404_Error.gif" alt="not found" />
      <Button variant="contained" onClick={() => navigate(-1)}>
        Back to home page
      </Button>
    </Box>
  );
};

export default NotFound;
