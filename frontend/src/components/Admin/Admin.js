import { Button } from "@mui/material";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { dataContext } from "../../Hooks/ContextProvider";
import { useContext, useState } from "react";

const Admin = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { navigate, setCartOpen } = useContext(dataContext);

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
      <Button
        id="button"
        aria-controls="menu"
        onClick={handleClick}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        ADMIN
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "button",
        }}
      >
        <MenuItem onClick={handleEditClick}>Edit Products</MenuItem>
        <MenuItem onClick={handleAddClick}>Add New Product</MenuItem>
      </Menu>
    </div>
  );
};

export default Admin;
