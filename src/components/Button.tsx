import React, { MouseEventHandler, ReactNode } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

type Props = {
  color: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

export default function CustomButton({
  color,
  handleClick,
  children,
}: Props): JSX.Element {
  let useStyles;

  
  console.log(screen.width);

  if (screen.width > 600) {    
    useStyles = makeStyles(() => ({
      button: {
        width: "250px",
        height: "60px",
        borderRadius: "8px",
        margin: "2px",
        backgroundColor: color,
        fontSize: "12px",
        fontWeight: "bold",
        color: "white",
      },
    }));
  } else {    
    useStyles = makeStyles(() => ({
      button: {
        width: "100%",
        height: "60px",
        borderRadius: "8px",
        margin: "2px",
        backgroundColor: color,
        fontSize: "12px",
        fontWeight: "bold",
        color: "white",
        "&:hover": {
          backgroundColor: color
      }
      },
    }));
  }

  return (
    <div>
      <Button
        variant="contained"
        size="large"
        className={useStyles().button}
        onClick={handleClick}
      >
        {children}
      </Button>
    </div>
  );
}
