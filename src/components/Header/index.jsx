import { Disclosure } from "@headlessui/react";
// import { ReactComponent as Burger } from "@images/burger.svg";
// import { ReactComponent as X } from "@images/x.svg";
import home_logo from "@images/home/home-logo.png";
import { NavLink } from "react-router-dom";
// import { Button } from "antd";

function Header() {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <header>
            {/* <div className="flex h-auto py-6 justify-between">
              <div>
                <img src={home_logo} alt="logo" />
              </div>
              <div className="flex flex-row space-x-12 text-xl font-medium items-center">
                <div className="hidden md:block cursor-pointer">
                  <NavLink className="notSelected" to="/">
                    首页
                  </NavLink>
                </div>

                <div className="hidden md:block cursor-pointer">
                  <NavLink className="notSelected" to="/i">
                    Youtube
                  </NavLink>
                </div>
                <div className="hidden md:block cursor-pointer">
                  <NavLink className="notSelected" to="/f">
                    Facebook
                  </NavLink>
                </div>

                <div className="hidden md:block cursor-pointer">
                  <NavLink className="notSelected" to="/i">
                    Instagram
                  </NavLink>
                </div>
                <div className="hidden md:block cursor-pointer">
                  <NavLink className="notSelected" to="/s">
                    Shopee
                  </NavLink>
                </div>
                <div className="hidden md:block cursor-pointer">
                  <NavLink className="notSelected" to="/t">
                    Twitter
                  </NavLink>
                </div>
                <div className="hidden md:block cursor-pointer">
                  <NavLink className="notSelected" to="/t">
                    自助下单
                  </NavLink>
                </div>
                <div className="hidden md:block flex flex-row items-center">
                  <Button
                    className=""
                    type="primary"
                    shape="round"
                    size="large"
                  >
                    登陆
                  </Button>
                  <Button
                    className=""
                    type="primary"
                    shape="round"
                    size="large"
                  >
                    立即注册
                  </Button>
                </div>

                <div className="md:hidden flex items-center">
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
            </div> */}
            <div className="top">
              {/* w-10/12 h-20 mx-auto my-0 */}
              <div className="topImgBox">
                <img src={home_logo} alt="logo" />
              </div>
              <div className="top-center">
                <ul className="list-none w-auto h-auto hidden md:block headUl">
                  <li>
                    <NavLink className="notSelected" to="/">
                      首页
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="notSelected" to="/y">
                      Youtube
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="notSelected" to="/f">
                      Facebook
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="notSelected" to="/i">
                      Instagram
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="notSelected" to="/s">
                      Shopee
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="notSelected" to="/t">
                      Twitter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="notSelected" to="/a">
                      自助下单
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <div className="top-right-l">登陆</div>
                <div className="top-right-r">立即注册</div>
                {/* <Button type="primary" danger size="large">
                  登陆
                </Button>
                <Button size="large">立即注册</Button> */}
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
