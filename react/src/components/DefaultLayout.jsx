import { Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import {Navigate} from "react-router-dom";


export default function DefaultLayout() {

const {user, token} = useStateContext()
  
  if(!token){ //ako user nije logovan, preusmeri ga na loginpage
    return <Navigate to ="/login" />
  }
  
  return (
<div>
  
    <Outlet />
</div>

    )

}