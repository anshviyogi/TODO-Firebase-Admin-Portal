//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent
} from "react-pro-sidebar";

import {AiFillAppstore} from 'react-icons/ai'

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import {
  FiHome,
  FiArrowLeftCircle,
  FiArrowRightCircle
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(true);

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? <AiFillAppstore style={{fontSize:"36px",marginTop:"10px"}}/> : <span>Admin Panel</span>}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            {/* <Menu iconShape="square"> */}

            <Link to='/dashboard' style={{textDecoration:"none"}}>
              <Menu>
              <MenuItem active={true} icon={<FiHome />}>Home</MenuItem>
              </Menu>
              </Link>

              <Link to='/dashboard/users' style={{textDecoration:"none"}}>
            <Menu>    
              <MenuItem icon={<FaRegHeart />}>Users</MenuItem>
            </Menu>
            </Link>
              
              <Link to='/dashboard/tasklist' style={{textDecoration:"none"}}>
              <Menu>
              <MenuItem icon={<FaList />}>Task List</MenuItem>
              </Menu>
              </Link>

              <Link to='/dashboard/tasks' style={{textDecoration:"none"}}>
              <Menu>
              <MenuItem icon={<RiPencilLine />}>Tasks</MenuItem>
              </Menu>
              </Link>

            {/* </Menu> */}
          </SidebarContent>
          <SidebarFooter>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
