import React, { useState } from "react";
import {PiCodeBlock} from 'react-icons/pi'
import {TiBusinessCard} from 'react-icons/ti'
import { SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Development", "sub1", <PiCodeBlock />, [
    getItem(<Link to={"/courses"}>Web Development</Link>),
    getItem(<Link to={"/"}>Grphics Design</Link>),
    getItem(<Link to={"/"}>Mobile Development</Link>),
    getItem(<Link to={"/"}>Programming Languages</Link>),
    getItem(<Link to={"/"}>Game Development</Link>),
    getItem(<Link to={"/"}>Software Development Tools</Link>),
  ]),

  getItem("Business", "itm2", <TiBusinessCard />, [
    getItem(<Link to={"/"}>Enterpreneurship</Link>),
    getItem(<Link to={"/"}>Communication</Link>),
    getItem(<Link to={"/"}>Sales</Link>),
    getItem(<Link to={"/"}>Business Strategy</Link>),
    getItem(<Link to={"/"}>E-Commerce</Link>),
  ]),
  getItem("Finance & Accounting", "sub3", <SettingOutlined />, [
    getItem(<Link to={"/"}>Economics</Link>),
    getItem(<Link to={"/"}>Accounting & Bookkeeping</Link>),
    getItem(<Link to={"/"}>Cryptocurrency & Blockchain</Link>),
    getItem(<Link to={"/"}>Finance</Link>),
    getItem(<Link to={"/"}>Investing & Tranding</Link>),
  ]),
  getItem("Office Productivity", "sub4"),
  getItem("Personal Development", "sub5"),
  getItem("Design", "sub6"),
  getItem("Marketing", "sub7"),
  getItem("Lifestyle", "sub8"),
  getItem("Photography & Video", "sub9"),
  getItem("Health & Fitness", "sub10"),
  getItem("Music", "sub11"),
  getItem("Teaching & Academics", "sub12"),
];

const Categories = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const onClick = (e) => {
    setOpenMenu(false);
  };
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <button onClick={handleMenu}>Categories</button>
      {openMenu && (
        <div className="flex justify-center ">
          <Menu
            className="sticky md:fixed mt-3 border border-blue-gray-100/70 shadow drop-shadow-2xl rounded-lg"
            onClick={onClick}
            style={{
              width: 256,
            }}
            mode="vertical"
            items={items}
          />
        </div>
      )}
    </>
  );
};
export default Categories;
