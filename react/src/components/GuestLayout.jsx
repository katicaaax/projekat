import { Outlet } from "react-router-dom";

export default function GuestLayout(){

    return(
//renderujemo login i signup
<div>
<h1>Test</h1>
    <Outlet />
</div>

    )

}