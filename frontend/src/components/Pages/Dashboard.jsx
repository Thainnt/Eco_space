
import styles from "../../styles.css"
import Avatar from '@mui/material/Avatar'
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@mui/material/Button'

import { useEffect, useState } from "react"
import axios from "axios";
import useForkRef from "@mui/utils/useForkRef";


function Dashboard() {
  const [user, setUser] = useState({});


  useEffect(() => {
    const user = localStorage.getItem('user');
    setUser(JSON.parse(user));
  }, [])

  return(
  <div >
    <div>
      <h2>Dashboard</h2>
      <div>
        {user.email}
      </div>
    </div>
  </div>


  );
};

export default Dashboard;