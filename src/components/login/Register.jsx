import { useState, useContext } from "react";
import { Button, Input } from "@material-tailwind/react";
import Container from "../container/Container";
import { LiaFacebook, LiaGithub, LiaGofore } from "react-icons/lia";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
const img_hosting_token = import.meta.env.VITE_IMGBB;

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { createUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const confirm = form.confirm.value;

    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    await fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        const imgUrl = imgResponse.data.display_url;
        if (imgUrl) {
          toast.success("image upload successfull");
        }
        createUser(email, password)
          .then((result) => {
            updateUserProfile(name, imgUrl).then(() => {
       
              toast.success("user account successfull");
            });
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error);
            toast.error(`${error}`);
          });
      });
  };
  const handleGoogleSignIn = () => {
   
    signInWithGoogle()
      .then((result) => {
        toast.success("login success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(`${error}`);
      });
  };
  return (
    <Container>
      <h2 className="text-center text-xl mt-10">Register</h2>
      <form
        onSubmit={handleSubmit}
        action=""
        className="max-w-md mx-auto mt-14"
      >
        <div className="mb-6">
          <Input
            type="text"
            name="name"
            required
            variant="standard"
            label="User Name"
          />
        </div>
        <div className="mb-6">
          <Input
            type="email"
            name="email"
            required
            variant="standard"
            label="User Email"
          />
        </div>
        <div className="mb-6">
          <Input
            name="password"
            required
            variant="standard"
            type="password"
            label="Password"
          />
        </div>
        <div className="mb-6">
          <Input
            required
            name="confirm"
            variant="standard"
            type="password"
            label="Confirm Password"
          />
        </div>
        <div className="mb-6">
          <Input
            required
            name="image"
            // variant="standard"
            type="file"
            label="Upload photo"
          />
        </div>
        <div className="mb-6">
          <Button type="submit" className="w-full ">
            Register
          </Button>
        </div>
      </form>
      <div className="mb-6 flex flex-col justify-center items-center">
        <h4>you have an account ?</h4>
        <Link
          className="text-gray-500 hover:text-blue-gray-700 hover:underline"
          to={`/signin`}
        >
          Log-In here...
        </Link>
      </div>
      <div className="flex justify-center my-6">
        <div className="flex gap-4">
          <IconButton
            onClick={handleGoogleSignIn}
            className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10"
          >
            <LiaGofore className="text-3xl" />
          </IconButton>
          <IconButton className="rounded bg-[#5c4bf7] hover:shadow-[#4735ea]/20 focus:shadow-[#4735ea]/20 active:shadow-[#4735ea]/10">
            <LiaFacebook className="text-3xl" />
          </IconButton>

          <IconButton className="rounded bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10">
            <LiaGithub className="text-3xl" />
          </IconButton>
        </div>
      </div>
      <div className="mb-6 flex flex-col justify-center items-center">
        <Link to={`/`}>
          <Button className=" ">go back home</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Register;
