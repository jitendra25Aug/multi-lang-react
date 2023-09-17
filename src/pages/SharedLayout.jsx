import { Outlet } from "react-router";
import { Navbar, Sidebar, ThemeSwitcher } from "../components";

/**
 * CONTAINS THE WHOLE UI OF THE APPLICATION
 */

const SharedLayout = ()=>{
    return (
        <>
            <Navbar />
            <Sidebar />
            <Outlet />
            <ThemeSwitcher />
        </>
    );
}

export default SharedLayout;