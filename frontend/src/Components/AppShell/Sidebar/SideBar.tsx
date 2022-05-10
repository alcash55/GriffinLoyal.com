import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import { Box, IconButton, SvgIcon } from "@mui/material";
import "./SideBar.scss";
import loyal from "../../../Assets/images/Loyal.svg";
import MerchIcon from "@mui/icons-material/Checkroom";
import WatchIcon from "@mui/icons-material/LiveTv";
import ScheduleIcon from "@mui/icons-material/CalendarMonth";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import sidebarBg from "../../../Assets/images/SidebarBG.svg";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const SideBar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <Router>
      <ProSidebar
        image={sidebarBg}
        collapsed={menuCollapse}
        className="sidebar"
      >
        <SidebarHeader>
          <Box
            style={{
              textAlign: "left",
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "flex",
              justifyContent: "left",
            }}
          >
            <Menu>
              <MenuItem>
                <IconButton
                  onClick={menuIconClick}
                  sx={{
                    color: "white",
                    ":hover": {
                      bgcolor: "rgb(83, 83, 83)",
                    },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </MenuItem>
            </Menu>
            <img src={loyal} alt="gbLogo" />
          </Box>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem className="menu-item" icon={<MerchIcon />}>
              <Link to="/">Merch</Link>
            </MenuItem>
            <MenuItem className="menu-item" icon={<WatchIcon />}>
              <Link to="/Watch">Watch</Link>
            </MenuItem>
            <MenuItem className="menu-item" icon={<ScheduleIcon />}>
              <Link to="/Schedule">Schedule</Link>
            </MenuItem>
            <MenuItem className="menu-item" icon={<EmojiPeopleIcon />}>
              <Link to="/AboutMe">About Me</Link>
            </MenuItem>
            <MenuItem className="menu-item" icon={<HandshakeIcon />}>
              <Link to="/Sponsors">Sponsors</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter style={{ textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="sidebar-btn-wrapper"
              style={{
                padding: "20px 24px",
              }}
            >
              <Box>
                <IconButton
                  href="https://twitter.com/griffinloyal"
                  target="blank"
                  sx={{
                    color: "white",
                    ":hover": {
                      bgcolor: "rgb(83, 83, 83)",
                    },
                  }}
                >
                  <SvgIcon>
                    <TwitterIcon />
                  </SvgIcon>
                </IconButton>

                <IconButton
                  href="https://www.instagram.com/griffinloyal/"
                  target="blank"
                  sx={{
                    color: "white",
                    ":hover": {
                      bgcolor: "rgb(83, 83, 83)",
                    },
                  }}
                >
                  <SvgIcon>
                    <InstagramIcon sx={{ color: "white" }} />
                  </SvgIcon>
                </IconButton>

                <IconButton
                  href="https://www.youtube.com/channel/UCKnU9i5L3GA0mirtqYpqDGA"
                  target="blank"
                  sx={{
                    color: "white",
                    ":hover": {
                      bgcolor: "rgb(83, 83, 83)",
                    },
                  }}
                >
                  <SvgIcon>
                    <YouTubeIcon sx={{ color: "white" }} />
                  </SvgIcon>
                </IconButton>
              </Box>
            </div>
          </Box>
        </SidebarFooter>
      </ProSidebar>
    </Router>
  );
};

export default SideBar;
