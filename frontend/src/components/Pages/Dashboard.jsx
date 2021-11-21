
// import styles from "../../styles.css"



import Nav from "./Navbar";

import { useEffect, useState } from "react"
import axios from "axios";
import useForkRef from "@mui/utils/useForkRef";


function Dashboard(props) {

  // const [user, setUser] = useState({});


  // useEffect(() => {
  //   const user = localStorage.getItem('user');
  //   setUser(JSON.parse(user));
  // }, [])

  return(
  <div >
    <Nav loggedInUserName={props.username || ""} />
    <p>This is a Dashboard page</p>
  </div>


  );
};

export default Dashboard;