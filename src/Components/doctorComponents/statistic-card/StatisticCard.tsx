import { Box, Card, Typography } from "@mui/material";
import { ReactNode } from "react";
import { card, description, title, total } from "./statistic-card.style";

interface IProps {
  icon: ReactNode;
  text: string;
  total: number;
}

const StatisticCard = (props: IProps) => {
  return (
    <Card sx={card}>
      <Box>
        <Typography sx={title}>{props.text}</Typography>
        <Typography sx={total}>{props.total}</Typography>
        <Typography sx={description}>15% From Last Week</Typography>
      </Box>
      <Box sx={{ backgroundColor: "#f9f5f5", p: 2, borderRadius: "5px" }}>
        {props.icon}
      </Box>
    </Card>
  );
};

export default StatisticCard;
