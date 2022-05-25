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
          <header class="px-4 md:px-24 shadow">
            <div class="flex titleBox">
              <div>
                <img src={home_logo} alt="logo" />
              </div>
              <div class="w-full flex flex-row items-center justify-end space-x-12">
                <div class="hidden sm:block cursor-pointer">
                  <NavLink class="notSelected" to="/">
                    首页
                  </NavLink>
                </div>
                <div class="hidden sm:block cursor-pointer">
                  <NavLink class="notSelected" to="/i">
                    instagram
                  </NavLink>
                </div>
                <div class="hidden sm:block cursor-pointer">
                  <NavLink class="notSelected" to="/s">
                    youtube
                  </NavLink>
                </div>
                <div class="hidden sm:block cursor-pointer">
                  <NavLink class="notSelected" to="/f">
                    facebook
                  </NavLink>
                </div>
                <div class="hidden sm:block cursor-pointer">
                  <NavLink class="notSelected" to="/t">
                    twitter
                  </NavLink>
                </div>
                <div class="sm:hidden flex items-center">
                  <Disclosure.Button>
                    {open ? (
                      <X
                        title="Close"
                        class="block h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <Burger
                        title="Burger"
                        class="block h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>
          </header>
          <Disclosure.Panel class="sm:hidden absolute w-full bg-conbg px-4 py-2">
            <div class="flex flex-col space-y-2">
              <div class="cursor-pointer">
                <NavLink class="notSelected" to="/">
                  首页
                </NavLink>
              </div>
              <div class="cursor-pointer">
                <NavLink class="notSelected" to="/i">
                  instagram
                </NavLink>
              </div>
              <div class="cursor-pointer">
                <NavLink class="notSelected" to="/y">
                  youtube
                </NavLink>
              </div>
              <div class="cursor-pointer">
                <NavLink class="notSelected" to="/f">
                  facebook
                </NavLink>
              </div>
              <div class="cursor-pointer">
                <NavLink class="notSelected" to="/t">
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
