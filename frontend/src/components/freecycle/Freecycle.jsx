import {React, Fragment} from "react";
import useFetch from "../useFetch";
import { Dropdown, DropdownButton } from 'react-bootstrap';





export default function Freecycle(props) {

  useFetch();

  return (
    <>

    <DropdownButton id="dropdown-basic-button" title="Categories">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    </DropdownButton>
    <p>sjhfskfhsd</p>
    <p>sjhfskfhsd</p>
    <p>sjhfskfhsd</p>
    <p>sjhfskfhsd</p>
    </>
  )
}