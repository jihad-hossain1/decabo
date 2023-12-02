import React, { useState } from "react";
// import styles from "./style.module.scss";
import { MobileNav } from "@material-tailwind/react";
import { GiHamburgerMenu, GiTireIronCross } from "react-icons/gi";

const MNav = () => {
  const [isActive, setIsActive] = useState(false);
  const navList = (
    <>
      <div>abc</div>
    </>
  );
  return (
    // <div
    //   onClick={() => {
    //     setIsActive(!isActive);
    //   }}
    //   className={styles.button}
    // >
    //   <div
    //     className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
    //   >
    //     <AnimatePresence mode="wait">
    //       {isActive && (
    //         <ul>
    //           <li>login</li>
    //           <li>login</li>
    //           <li>login</li>
    //           <li>login</li>
    //         </ul>
    //       )}
    //     </AnimatePresence>
    //   </div>
    // </div>
    <>
      <div className="">
        <button
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden p-2"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? (
            <GiTireIronCross size={24} />
          ) : (
            <GiHamburgerMenu size={24} />
          )}
        </button>
      </div>
      <MobileNav open={isActive}>
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </>
  );
};

export default MNav;
