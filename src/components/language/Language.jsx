import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  ListItem,
} from "@material-tailwind/react";
import { MdOutlineLanguage } from "react-icons/md";

export function DialogWithLanguage() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button
        onClick={handleOpen}
        color="blue-gray"
        variant="outlined"
        className="rounded-sm text-gray-900 py-[4px] hover:bg-gray-200 = px-2 flex justify-center "
      >
        <MdOutlineLanguage className="text-2xl" />
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
              <Card className="mx-auto w-full max-w-[24rem]  p-8">
                  <h4 className="text-blue-gray-900 font-semibold">
                      Choose a language
                  </h4>
          <ul className="grid grid-cols-2">
            <ListItem onClick={handleOpen}>English</ListItem>
           
            <ListItem onClick={handleOpen}>Hindi</ListItem>
           
            <ListItem onClick={handleOpen}>Bangla</ListItem>
           
            <ListItem onClick={handleOpen}>Espanol</ListItem>
            <ListItem onClick={handleOpen}>Italiano</ListItem>
            <ListItem onClick={handleOpen}>Romana</ListItem>
            <ListItem onClick={handleOpen}>Turkce</ListItem>
           
           
          </ul>
        </Card>
      </Dialog>
    </>
  );
}
