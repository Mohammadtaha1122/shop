import { NavLink, Outlet } from "react-router-dom";

function Shopping() {
  return (
    <div className="bg-white h-screen">
      <div className="container ">
        <div className="flex max-md:m-auto gap-4 mt-1 pt-4 text-[#565564]">
          <NavLink
            to="/shopping"
            end
            className={({ isActive }) =>
              `relative pb-4 px-2 ${
                isActive
                  ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[6px] after:rounded-t-2xl  after:bg-orange-400"
                  : ""
              }`
            }
          >
            سبد خرید
          </NavLink>
          <NavLink
            to="nextShoppingCart"
            className={({ isActive }) =>
              `relative px-2 pb-2 ${
                isActive
                  ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[6px] after:rounded-t-2xl after:bg-orange-400"
                  : ""
              }`
            }
          >
            سبد خرید بعدی
          </NavLink>
        </div>
        <hr />
        <Outlet />
      </div>
    </div>
  );
}

export default Shopping;
