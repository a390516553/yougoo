import { Disclosure } from "@headlessui/react";
import { ReactComponent as Burger } from "@images/burger.svg";
import { ReactComponent as X } from "@images/x.svg";
import home_logo from "@images/home-logo.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <header className="max-w-screen-xl mx-auto my-0">
            {/* md:px-24 px-4 shadow*/}
            <div className="flex h-auto py-6 justify-between">
              {/* justify-around */}
              {/* titleBox justify-start*/}
              <div>
                <img src={home_logo} alt="logo" />
              </div>
              <div className="flex flex-row space-x-12 text-xl font-medium items-center">
                {/* flex flex-row ml-20 space-x-12 text-xl font-medium items-center */}
                {/* flex flex-row items-center justify-end space-x-12 */}
                <div className="hidden sm:block cursor-pointer">
                  <NavLink className="notSelected" to="/">
                    首页
                  </NavLink>
                </div>

                <div className="hidden sm:block cursor-pointer">
                  <NavLink className="notSelected" to="/i">
                    Youtube
                  </NavLink>
                </div>
                <div className="hidden sm:block cursor-pointer">
                  <NavLink className="notSelected" to="/f">
                    Facebook
                  </NavLink>
                </div>

                <div className="hidden sm:block cursor-pointer">
                  <NavLink className="notSelected" to="/i">
                    Instagram
                  </NavLink>
                </div>
                <div className="hidden sm:block cursor-pointer">
                  <NavLink className="notSelected" to="/s">
                    Shopee
                  </NavLink>
                </div>
                <div className="hidden sm:block cursor-pointer">
                  <NavLink className="notSelected" to="/t">
                    Twitter
                  </NavLink>
                </div>
                <div className="hidden sm:block cursor-pointer">
                  <NavLink className="notSelected" to="/t">
                    自助下单
                  </NavLink>
                </div>
                <div className="sm:hidden flex items-center">
                  <Disclosure.Button>
                    {open ? (
                      <X
                        title="Close"
                        className="block h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <Burger
                        title="Burger"
                        className="block h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <p>11111</p>
              </div>
            </div>
          </header>
          <Disclosure.Panel className="sm:hidden absolute w-full bg-conbg px-4 py-2">
            <div className="flex flex-col space-y-2">
              <div className="cursor-pointer">
                <NavLink className="notSelected" to="/">
                  首页
                </NavLink>
              </div>
              <div className="cursor-pointer">
                <NavLink className="notSelected" to="/i">
                  instagram
                </NavLink>
              </div>
              <div className="cursor-pointer">
                <NavLink className="notSelected" to="/y">
                  youtube
                </NavLink>
              </div>
              <div className="cursor-pointer">
                <NavLink className="notSelected" to="/f">
                  facebook
                </NavLink>
              </div>
              <div className="cursor-pointer">
                <NavLink className="notSelected" to="/t">
                  twitter
                </NavLink>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Header;
