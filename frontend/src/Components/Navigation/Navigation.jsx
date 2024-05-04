import * as React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import logo from "../../image2vector.svg";
// import logo from '/Users/vihidun/MyFolder/Development/pulse/frontend/src/image2vector.svg'
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("logout");
    handleClose();
  };
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py-5">
          <img src={logo} alt="" width={48} height={48} />
        </div>
        <div className="space-y-6">
          {navigationMenu.map((item) => (
            <div
              className="cursor-pointer flex space-x-3 
                item-center"
              onClick={() =>
                item.title === "Profile"
                  ? navigate(`/profile/${5}`)
                  : navigate(item.path)
              }
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>

        <div className="py-10">
          <Button
            sx={{
              width: "100%",
              borderRadius: "29px",
              py: "15px",
              bgcolor: "#da7e3c",
              color: "white",
              "&:hover": {
                bgcolor: "#FB6514",
              },
            }}
            variant="contained"
          >
            Hit
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar alt="username" src="" />
          <div>
            <span>Code with Vihi</span>
            <span className="opacity-70">@codewithvihi</span>
          </div>

          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              // width: "100%",
              // borderRadius: "20px",
              // paddingY: "8px",
              // paddingX: "20px",
              // bgcolor: "#da7e3c",
              color: "#FF8645",
            }}
          >
            {/* Dashboard */}
            <MoreHorizIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem> */}
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
