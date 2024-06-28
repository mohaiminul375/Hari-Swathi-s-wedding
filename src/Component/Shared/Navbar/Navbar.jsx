import { Link } from "react-router-dom";

const Navbar = () => {
  const navItem = (
    <>
      <Link>Home</Link>
    </>
  );
  return (
    <div className="navbar h-16  bg-base-100 shadow-lg md:px-10">
      <div className="navbar-start">
        <h2 className="text-lg md:text-3xl text-blue-600 font-kanit">
          Hari & Swathi's Wedding
        </h2>
      </div>
      <div className="flex-1"></div>
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 items-center">
          {navItem}
        </ul>
      </div>
      {/* dropdown */}
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          {/* <GiHamburgerMenu /> */}
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#141C27] rounded-box w-52"
        >
          {navItem}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
