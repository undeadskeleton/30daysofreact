import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0 ">
      <nav className="bg-white border-gray-200 px-5 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between item-center mx-auto max-w-screen-xl">
          <Link>
            {" "}
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt=""
              className="h-12 mr-3"
            />
          </Link>
          <div className="flex items-center lg:order-2 ">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 rounded-lg text-sm px-4 lg:px-5 lg:py-2.5 mr-2  py-2 "
            >
              Log in
            </Link>
            <Link
              to="#"
              className="bg-orange-700 px-3 rounded-lg text-sm text-white hover:bg-orange-800 py-2 lg:px-5 lg:py-2.5 mr-2 focus:outline-none focus:ring-5 focus:ring-orange-300 mt-1 mb-1"
            >
              Get Started
            </Link>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1 ">
            <ul className="flex felx-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block  px-3 ${
                      isActive
                        ? "text-orange-700 bg-orange-50 rounded-lg"
                        : "text-gray-100 "
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover-bg-transparent duration-200 py-2 visited:text-gray-100`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 ${
                      isActive
                        ? "text-orange-700 bg-orange-50 rounded-lg"
                        : "text-gray-100"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover-bg-transparent  visited:text-gray-100`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 ${
                      isActive
                        ? "text-orange-700 bg-orange-50 rounded-lg"
                        : "text-gray-100"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover-bg-transparent visited:text-gray-100`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
