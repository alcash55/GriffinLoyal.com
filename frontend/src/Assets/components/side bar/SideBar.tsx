import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
} from 'react-pro-sidebar';
import { Box, IconButton, SvgIcon } from '@mui/material';
import './SideBar.scss';
import loyal from '../../images/Loyal.svg';
import MerchIcon from '@mui/icons-material/Checkroom';
import WatchIcon from '@mui/icons-material/LiveTv';
import ScheduleIcon from '@mui/icons-material/CalendarMonth';
import SponsorsIcon from '@mui/icons-material/PersonSearch';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MenuIcon from '@mui/icons-material/Menu';
import sidebarBg from '../../images/bg2.png';

const SideBar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <Box
          style={{
            textAlign: 'left',
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            display: 'flex',
            justifyContent: 'left',
          }}
        >
          <Menu>
            <MenuItem icon={<MenuIcon />}></MenuItem>
          </Menu>
          <img src={loyal} alt="gbLogo" />
        </Box>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<MerchIcon />}>Merch</MenuItem>
          <MenuItem icon={<WatchIcon />}>Watch</MenuItem>
          <MenuItem icon={<ScheduleIcon />}>Schedule</MenuItem>
          <MenuItem icon={<SponsorsIcon />}>Sponsors</MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ textAlign: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 24px',
            }}
          >
            <Box>
              <IconButton>
                <SvgIcon>
                  <TwitterIcon sx={{ color: 'white' }} />
                </SvgIcon>
              </IconButton>

              <IconButton>
                <SvgIcon>
                  <InstagramIcon sx={{ color: 'white' }} />
                </SvgIcon>
              </IconButton>

              <IconButton>
                <SvgIcon>
                  <YouTubeIcon sx={{ color: 'white' }} />
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
