import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "../../Hooks/ContextProvider";

const Admin = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { navigate } = useContext(dataContext);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleEditClick = () => {
    setAnchorEl(null);
    navigate("/Edit");
  };
  const handleAddClick = () => {
    setAnchorEl(null);
    navigate("/Add");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        id="button"
        aria-controls="menu"
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        ADMIN
      </button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "button",
        }}
      >
        <Link to="/Edit">
          <MenuItem onClick={handleEditClick}>Edit Products</MenuItem>
        </Link>
        <Link to="/Add">
          <MenuItem onClick={handleAddClick}>Add New Product</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Admin;
