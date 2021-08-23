import { makeStyles } from "@material-ui/core";
import { theme } from "_config/theme";

const padding = 16;

interface StylesProps {
  footerPosition?: "relative" | "fixed";
}

export const useStyles = makeStyles<typeof theme, StylesProps>({
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  header: {
    padding: padding,
    background: "#f9f9f9f9",
  },
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    //padding: padding,
    overflow: 'auto',
    position: 'relative'
  },
  footer: {
    width: "100%",
    padding: "16px 16px 24px 16px",
    position: ({ footerPosition }) => footerPosition ?? "relative",
    bottom: 0,
    left: 0,
    right: 0,

    "& .MuiContainer-root": {
      padding: 0,
    },
  },
});