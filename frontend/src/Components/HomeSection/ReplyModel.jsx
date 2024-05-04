import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import image from "../../Assets/gym.jpeg";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GradingIcon from '@mui/icons-material/Grading';
import ImageIcon from "@mui/icons-material/Image";
import { useFormik } from "formik";
import * as Yup from "yup";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  borderRadius: 4 
};



export default function ReplyModel({handleClose, open}) {
const navigate = useNavigate()

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required"),
  });

const [uploadingImage, setuploadingImage] = useState(false);
const [selectedImage, setSelectedImage] = useState("");

const handleSubmit = (values) => {
    console.log("values", values);
  };

const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      twitId:4
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
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="https://media.licdn.com/dms/image/D4E03AQH4kyaBK_DLkQ/profile-displayphoto-shrink_800_800/0/1689189799493?e=2147483647&v=beta&t=W3Hv0h-g3lFU0VU1IZSW7_2JBn91dyb1z-EGuvCqrhI"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Code With Vihi</span>
              <span className="text-grey-600">@codewithvihi . 2m</span>
            </div>

          </div>

          <div className="mt-2">
            <div
              className="cursor-pointer"
              onClick={() => navigate(`/twit/${3}`)}
            >
              <p className="mb-2 p-0">
                "The real workout starts when you want to stop."
              </p>

            </div>

          </div>
        </div>

      </div>        <section className={"py-10"}>
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
        </Box>
      </Modal>
    </div>
  );
}
