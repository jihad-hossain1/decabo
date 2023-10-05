import React, { useContext, useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  IconButton,
  MobileNav,
  Navbar,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import {HiOutlineMenu,HiOutlineX,HiOutlineChevronDown} from 'react-icons/hi'
import { NavLink, useNavigation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import {BiSolidHomeSmile} from 'react-icons/bi'
export const SidebarWithLogo = () => {
  const {user ,logOut} = useContext(AuthContext)
  const [open, setOpen] = useState(0);
  const [openAlert, setOpenAlert] = useState(true);
  const navigate = useNavigation()

  const handleLogOut = ()=>{
    if(logOut){
      logOut()
      navigate('/')
    }
  }
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (<>
    <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className='p-0' selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className='border-b-0 p-3'
              >
                <ListItemPrefix>
                  <PresentationChartBarIcon className='h-5 w-5' />
                </ListItemPrefix>
                <Typography color='blue-gray' className='mr-auto font-normal'>
                  Dashboard
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className='py-1'>
              <List className='p-0'>
                <NavLink
                  to={`/dashboard/addCourse`}
                  className={({ isActive }) =>
                    isActive ? "text-cyan-700" : ""
                  }
                >
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                    </ListItemPrefix>
                    Add Course
                  </ListItem>
                </NavLink>
                
                <NavLink
                  to={`/dashboard/manageCourses`}
                  className={({ isActive }) =>
                    isActive ? "text-cyan-700" : ""
                  }
                >
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                    </ListItemPrefix>
                    Manage Courses
                  </ListItem>
                </NavLink>
                
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                  </ListItemPrefix>
                  Others
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className='p-0' selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className='border-b-0 p-3'
              >
                <ListItemPrefix>
                  <ShoppingBagIcon className='h-5 w-5' />
                </ListItemPrefix>
                <Typography color='blue-gray' className='mr-auto font-normal'>
                  Enrollment
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className='py-1'>
              <List className='p-0'>
                <NavLink to={`/dashboard/enroll`} className={({ isActive }) =>
                    isActive ? "text-cyan-700" : ""
                  }>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                  </ListItemPrefix>
                  Enroll
                </ListItem>
                </NavLink>
                <ListItem>
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className='h-3 w-5' />
                  </ListItemPrefix>
                  Product
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>
          <hr className='my-2 border-blue-gray-50' />
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className='h-5 w-5' />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip
                value='14'
                size='sm'
                variant='ghost'
                color='blue-gray'
                className='rounded-full'
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className='h-5 w-5' />
            </ListItemPrefix>
            Profile
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className='h-5 w-5' />
            </ListItemPrefix>
            Settings
          </ListItem>
          <NavLink
            to={`/`}
            className={({ isActive }) => (isActive ? "text-cyan-700" : "")}
          >
            <ListItem>
              <ListItemPrefix>
                <BiSolidHomeSmile className='h-5 w-5' />
              </ListItemPrefix>
              Go To Home
            </ListItem>
          </NavLink>
          <ListItem onClick={handleLogOut}>
            <ListItemPrefix>
              <PowerIcon className='h-5 w-5' />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
  </>)
  return (
    <>
      {/* for mobile device  */}
      <Navbar className='sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 md:hidden'>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <HiOutlineX className='text-3xl text-blue-gray-800'></HiOutlineX>
          ) : (
            <HiOutlineMenu className='text-3xl  text-blue-gray-800'></HiOutlineMenu>
          )}
        </IconButton>
        <MobileNav open={openNav}>{navList}</MobileNav>
      </Navbar>

      {/* for desktop device  */}

      <Card className='hidden md:block  h-screen w-full max-w-[20rem] p-4 shadow-md shadow-blue-gray-900/5'>
        <div className='mb-2 flex items-center gap-4 p-4'>
          <img
            src={user?.photoURL}
            alt='brand'
            className='rounded-full h-10 w-10'
          />
          <Typography variant='h5' color='blue-gray'>
            {user?.displayName}
          </Typography>
        </div>
        {navList}
        <Alert
          open={openAlert}
          className='mt-auto'
          onClose={() => setOpenAlert(false)}
        >
          <CubeTransparentIcon className='mb-4 h-12 w-12' />
          <Typography variant='h6' className='mb-1'>
            Upgrade to PRO
          </Typography>
          <Typography variant='small' className='font-normal opacity-80'>
            Upgrade to PRO Member and get even more Conceptual Session, more
            Support, advanced features and premium.
          </Typography>
          <div className='mt-4 flex gap-3'>
            <Typography
              as='a'
              href='#'
              variant='small'
              className='font-medium opacity-80'
              onClick={() => setOpenAlert(false)}
            >
              Dismiss
            </Typography>
            <Typography as='a' href='#' variant='small' className='font-medium'>
              Upgrade Now
            </Typography>
          </div>
        </Alert>
      </Card>
    </>
  );
};



               