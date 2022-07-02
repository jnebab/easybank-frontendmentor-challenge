import { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import Button from "./Button";

const navItems = ["home", "about", "contact", "blog", "careers"];

export default function Header() {
  const [show, setShow] = useState<boolean>(false);

  const springApi = useSpringRef();
  const { height, width, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { height: 265, width: "10%" },
    to: {
      width: show ? "90%" : "10%",
      height: show ? 265 : 265,
      background: "white",
    },
  });

  const transApi = useSpringRef();
  const navTransition = useTransition(show ? navItems : [], {
    ref: transApi,
    trail: 400 / navItems.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  const handleShowNav = () => setShow((old) => !old);

  useChain(show ? [springApi, transApi] : [transApi, springApi], [
    0,
    show ? 0.1 : 0.7,
  ]);

  return (
    <header className="h-16 lg:h-[80px] box-border min-w-screen z-20">
      <div className="bg-white hidden lg:h-[80px] lg:flex  px-[165px] items-center justify-between">
        <img src="https://res.cloudinary.com/ds2ene5mm/image/upload/v1656484349/easybank/logo_bkx0fx.svg" />
        <nav className="flex items-center capitalize space-x-8 h-full">
          {navItems.map((item) => (
            <div className="h-full lg:border-b-4 border-transparent hover:border-emerald items-center flex">
              <a
                href="#"
                className="text-neutral hover:text-dark text-sm -tracking-[0.11px] font-normal"
              >
                {item}
              </a>
            </div>
          ))}
        </nav>
        <Button
          label="Request Invite"
          handleClick={() => {}}
          classNames="text-base"
        />
      </div>
      <div className="px-6 py-[22px] w-full flex justify-between lg:hidden bg-white">
        <div>
          <img src="https://res.cloudinary.com/ds2ene5mm/image/upload/v1656484349/easybank/logo_bkx0fx.svg" />
        </div>
        {show ? (
          <img
            onClick={handleShowNav}
            src="https://res.cloudinary.com/ds2ene5mm/image/upload/v1656484344/easybank/icon-close_utq7ml.svg"
          />
        ) : (
          <img
            onClick={handleShowNav}
            src="https://res.cloudinary.com/ds2ene5mm/image/upload/v1656484346/easybank/icon-hamburger_mfxurp.svg"
          />
        )}
      </div>
      {show ? (
        <animated.div className="w-screen h-screen bg-nav-overlay z-20">
          <animated.nav
            style={{
              ...rest,
              width,
              height,
              right: 0,
              left: 0,
              top: 88,
              margin: "auto",
            }}
            className="flex flex-col space-y-6 py-8 items-center rounded-[4px] box-border absolute z-30"
          >
            {navTransition((style, item) => (
              <animated.a
                key={item}
                href={`#${item !== "home" ? item : ""}`}
                className="capitalize will-change-[transform opacity]"
                style={{ ...style }}
              >
                {item}
              </animated.a>
            ))}
          </animated.nav>
        </animated.div>
      ) : null}
    </header>
  );
}
