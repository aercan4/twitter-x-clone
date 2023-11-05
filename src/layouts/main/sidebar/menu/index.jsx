import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { mainMenu } from "../../../../utils/constans";
import More from "./more";
import New from "./new";

export default function Menu() {
  return (
    <nav className="mt-0.5">
      {mainMenu.map((menu) => (
        // eslint-disable-next-line react/jsx-key
        <NavLink to={menu.path} className="py-1 block group">
          {({ isActive }) => (
            <div
              className={classnames(
                "p-3 rounded-full inline-flex transition-colors items-center gap-5  group-hover:bg-[#eff3f41a]",
                {
                  "font-bold": isActive,
                }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu.notification && (
                  <span className="w-[18px] h-[18px] rounded-full bg-[#1d9bf0] absolute -top-1.5 -right-1 text-[11px] flex items-center justify-center">
                    {menu.notification}
                  </span>
                )}
                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>

              <span className="text-xl pr-4">{menu.title}</span>
            </div>
          )}
        </NavLink>
      ))}

      <More />
      <New />
    </nav>
  );
}
