import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { UserType } from "../../../types/@types";
import { Box } from "@mui/system";
import { container } from "./ProtectedRoute.style";
interface IProps {
  children: React.ReactNode;
  userType: UserType;
}
const ProtectedRoute = (props: IProps) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return (
      <Box sx={container}>
        <img src="/common-images/401-Unauthorized.gif" alt="401-Unauthorized" />
      </Box>
    );
  } else if (user.userType !== props.userType) {
    return (
      <Box sx={container}>
        <img src="/common-images/403-Forbidden.gif" alt="403-Forbidden" />
      </Box>
    );
  }
  return props.children;
};

export default ProtectedRoute;
