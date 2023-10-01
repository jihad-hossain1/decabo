import React from "react";
import { Button, Input } from "@material-tailwind/react";
import Container from "../container/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { IconButton } from "@material-tailwind/react";
import { LiaFacebook, LiaGithub, LiaGofore } from "react-icons/lia";
// import { saveUser } from "../../auth/saveuser";

const SingIn = () => {
  const { signInAc, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmits = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInAc(email, password).then((result) => {
      const user = result.user;
      if (user) {
        toast.success("login successfull");
      }
    });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // saveUser(result.user);
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
      <h2 className="text-center text-xl mt-10">Log-In</h2>
      <form
        onSubmit={handleSubmits}
        action=""
        className="max-w-md mx-auto mt-14"
      >
        <div className="mb-6">
          <Input
            required
            type="email"
            name="email"
            variant="standard"
            label="User Email"
          />
        </div>
        <div className="mb-6">
          <Input
            required
            variant="standard"
            name="password"
            type="password"
            label="Password"
          />
        </div>
        <div className="mb-6">
          <Button className="w-full ">Sign-In</Button>
        </div>
      </form>
      <div className="mb-6 flex space-x-3 justify-center items-center">
        <h4>ops. you have no account ?</h4>
        <Link
          className="text-gray-500 hover:text-blue-gray-700 hover:underline"
          to={`/register`}
        >
          create your account
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

export default SingIn;
