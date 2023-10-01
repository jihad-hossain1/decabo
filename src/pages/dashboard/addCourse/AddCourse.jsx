import { Button, Input, Textarea } from '@material-tailwind/react';
import React from 'react';
import Container from '../../../components/container/Container';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddCourse = () => {
    // const { user } = useContext(AuthContext);
    const user = {
        email: 'jihadkhan934@gmail.com'
    }
  const navgiation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    // const detailsBangla = form.detailsBangla.value;
    // const detailsEnglish = form.detailsEnglish.value;
    const details = form.details.value;
    const info = {
      title,
      category,
    //   detailsEnglish,
      details,
    //   detailsBangla,
      email: user?.email,
    };
    try {
      const res = await fetch(`https://decabo-server.vercel.app/course`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(info),
      });
      const resData = res.json();
      if (resData) {
        toast.success(`${title} course added success`);
        // form.reset();
        // navgiation("/courses");
      } else {
        toast.error(`try again adding ${title} `);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
        <div className='max-w-[600px] mx-auto'>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-4'>
                <Input required color="teal" name='title' label="Your Course Title" />
                </div>
                <div className='mb-4'>
                <Input required color="teal" name='category' label="Category" />
                </div>
                <div className='mb-4'>
                <Textarea color="teal" required name='details' label="Details" />
                </div>
                <div>
                    <Button className='' value={`Add Course`} label='Add Course' type='submit' color='teal' variant='outlined'> Add Course </Button>
                </div>
            </form>
             
        </div>
    );
};

export default AddCourse;