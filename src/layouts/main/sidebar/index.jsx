import Logo from "./Logo/Logo";
import Menu from "./menu";

export default function SideBar(){
    return(
        <aside className="w-[275px] min-h-screen px-2">
            <Logo />
            <Menu />
        </aside>
    )
}