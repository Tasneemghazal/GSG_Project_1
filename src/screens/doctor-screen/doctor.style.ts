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

export const inputSearch = () => ({
  mb: 2,
  mt: 2,
  p:2,
  width: "30%",
  display: "flex",
  justifyContent: "space-between",
  borderRadius: "10px",
});
