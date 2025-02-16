export const container = () => ({
  display: "flex",
  backgroundColor: "#f7f3f3",
  height: "100vh",
});

export const content = () => ({
  flexGrow: 1,
  p: 3,
  ml: 2,
  "& .path-title": {
    color: "grey",
  },
});

