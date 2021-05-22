import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import LanguageIcon from "@material-ui/icons/Language";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MapIcon from "@material-ui/icons/Map";
import FlagIcon from "@material-ui/icons/Flag";

import "./Navbar.css";
import { Context } from "../Context";

const drawerData = [
  {
    title: "General",
    icon: <LanguageIcon style={{ fontSize: 40, color: "white" }} />,
    subject: "general",
  },
  {
    title: "Capitals",
    icon: <AccountBalanceIcon style={{ fontSize: 40, color: "white" }} />,
    subject: "capitals",
  },
  {
    title: "Regions",
    icon: <MapIcon style={{ fontSize: 40, color: "white" }} />,
    subject: "regions",
  },
  {
    title: "Flags",
    icon: <FlagIcon style={{ fontSize: 40, color: "white" }} />,
    subject: "flags",
  },
];

const useStyles = makeStyles({
  drawer: {
    marginTop: "80px",
    width: "250px",
    backgroundColor: "#191970",
    color: "white",
  },
  item: {
    fontSize: 32,
  },
});

export default function Navbar(): JSX.Element {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [title, setTitle] = useState("General");

  const { changeSubject } = useContext(Context);

  const openPage = (subject: string, title: string) => {
    changeSubject(subject);
    setTitle(title);
  };

  const classes = useStyles();

  const toggleDrawer = (open: boolean) => () => {
    setOpenDrawer(open);
  };

  return (
    <div>
      <div className="nav-bar">
        <div className="button-bar">
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon style={{ fontSize: 40, color: "white" }} />
          </IconButton>
          <Drawer
            anchor="left"
            open={openDrawer}
            onClose={toggleDrawer(false)}
            classes={{ paper: classes.drawer }}
          >
            <div onClick={toggleDrawer(false)}>
              <List>
                {drawerData.map((data, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => openPage(data.subject, data.title)}
                  >
                    <ListItemIcon> {data.icon}</ListItemIcon>
                    <ListItemText
                      primary={data.title}
                      classes={{ primary: classes.item }}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </div>

        <div className="title-bar">
          <div className="title">{title}</div>
        </div>
      </div>
    </div>
  );
}
