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
import SponsorsIcon from "@mui/icons-material/PersonSearch";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import sidebarBg from "../../../Assets/images/SidebarBG.svg";
import { useState } from "react";

const SideBar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <ProSidebar image={sidebarBg} collapsed={menuCollapse} className="sidebar">
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
            <a href="#merch">Merch</a>
          </MenuItem>
          <MenuItem className="menu-item" icon={<WatchIcon />}>
            Watch
          </MenuItem>
          <MenuItem className="menu-item" icon={<ScheduleIcon />}>
            Schedule
          </MenuItem>
          <MenuItem className="menu-item" icon={<SponsorsIcon />}>
            Sponsors
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
  );
};

export default SideBar;
