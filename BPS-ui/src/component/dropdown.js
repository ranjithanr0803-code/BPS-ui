import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DropdownOptions from "./common/DropdownOptions";
import PAGES from "./constants";

export default function Dropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElId, setAnchorElId] = React.useState(null);

  const navigate = useNavigate();

  const handleMouseEnter = (event, index) => {
    setAnchorElId(index);
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {PAGES.map((pages, index) => {
        return (
          <div
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            // onMouseLeave={handleMouseLeave}
          >
            <Button
              className="dropdown-button"
              onClick={() => {
                if (pages.item.length === 0) {
                  navigate(pages.path[0]);
                }
              }}
              style={{fontWeight:'bold',fontSize:'1rem',color:'black'}}
            >
              {pages.title}
            </Button>
            <div
              // onMouseLeave={handleMouseLeave}
              // style={{ backgroundColor: "red" }}
            >
              {anchorElId === index && (
                <DropdownOptions
                  {...props}
                  data={pages.item}
                  path={pages.path}
                  anchorEl={anchorEl}
                  handleClose={handleClose}
                  handleMouseLeave={handleMouseLeave}
                />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
// ----------------------------------------------------------------------------------------
