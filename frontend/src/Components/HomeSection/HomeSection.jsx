import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ImageIcon from "@mui/icons-material/Image";
import TweetCard from "./TweetCard";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GradingIcon from '@mui/icons-material/Grading';


const validationSchema = Yup.object().shape({
  content: Yup.string().required("Tweet text is required"),
});

const HomeSection = () => {
  const [uploadingImage, setuploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleSelectImage = (event) => {
    setuploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setuploadingImage(false);
  };
  return (
    <div className="space-y-5">
      <section>
        <h1 className="py-5 text-x1 font-bold opacity-90">Home</h1>
      </section>
      <section className={"pb-10"}>
        <div className="flex space-x-5">
          <Avatar alt="username" src="https://media.licdn.com/dms/image/D4E03AQH4kyaBK_DLkQ/profile-displayphoto-shrink_800_800/0/1689189799493?e=2147483647&v=beta&t=W3Hv0h-g3lFU0VU1IZSW7_2JBn91dyb1z-EGuvCqrhI" />
          <div className="w-full">
            <form onSubmit={formik.handleSubmit}>
              <div>
                <input
                  type="text"
                  name="content"
                  placeholder="what is happening"
                  className={"border-none outline-none text-xl bg-transparent"}
                  {...formik.getFieldProps("content")}
                />
                {formik.errors.content && formik.touched.content && (
                  <span className="text-red-500">{formik.errors.content}</span>
                )}
              </div>
              {/* <div>
                <img src="" alt="" />
              </div> */}
              <div className="flex justify-between items-center mt-5">
                <div className="flex space-x-5 items-center">
                  <label className="flex items-center space-x-2 rounded-md cursor-pointer">
                    <ImageIcon className="text-[#da7e3c]" />
                    <input
                      type="file"
                      name="imageFile"
                      className="hidden"
                      onChange={handleSelectImage}
                    />
                  </label>
                  <RestaurantIcon className="text-[#da7e3c]" />
                  <FitnessCenterIcon className="text-[#da7e3c]" />
                  <GradingIcon className="text-[#da7e3c]" />
                </div>
                <div>
                  <Button
                    sx={{
                      width: "100%",
                      borderRadius: "20px",
                      paddingY: "8px",
                      paddingX: "20px",
                      bgcolor: "#da7e3c",
                      color: "white",
                      '&:hover': {
                        bgcolor: '#FB6514',
                      },
                    }}
                    variant="contained"
                    type="submit"
                  >
                    Hit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section >
        {[1,1,1,1].map((item) => <TweetCard />)}
      </section>
    </div>
  );
};

export default HomeSection;
