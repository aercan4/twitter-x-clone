import { Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import RightBar from "./rightbar";

export default function MainLayout() {
    return(
        <div className="w-[1265px] mx-auto flex">
            <SideBar />
            <main className="flex flex-1 gap-[30px]">
                <main className="flex-1 mw-[600px] border-x border-[#2f3336]">
                <Outlet />

                </main>
                <RightBar />
            </main>
        </div>
        
    )
}