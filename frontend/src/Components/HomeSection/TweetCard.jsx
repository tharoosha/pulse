import React from "react";
import { defaultLocale } from "yup";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import image from "../../Assets/gym.jpeg"
import { ChatBubbleOutline, FileUpload, BarChart, Favorite, FavoriteOutlined } from "@mui/icons-material";

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log("delete tweet");
    handleClose();
  };

  const handleOpenReplyModel = () =>{
    console.log("open model")
  }

  const handleCreateRetweet = () =>{
    console.log("retweet")
  }

  const handleLiketweet = () =>{
    console.log("handle like tweet");
  }
  return (
    <div className="" >
      {/* <div className='flex items-center font-semibold text-grey-700 py-2'>
            <RepeatIcon />
            <p>You Retweet</p>
        </div> */}

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
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                    // width: "100%",
                    // borderRadius: "20px",
                    // paddingY: "8px",
                    // paddingX: "20px",
                    // bgcolor: "#da7e3c",
                    color: "#FF8645",
                  }}
              >
                {/* Dashboard */}
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div className="cursor-pointer" onClick={()=>navigate(`/twit/${3}`)}>
                <p className="mb-2 p-0">"The real workout starts when you want to stop."</p>
                <img className='w-[28rem] border border-gray-400 rounded-md' src={image} alt="" />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
                <div className="space-x-3 flex items center text-grey-600">
                <ChatBubbleOutline className="cursor-pointer" onClick={handleOpenReplyModel}/>
                <p>43</p>
                </div>
                <div className={`${true? "text-pink-600":"text-grey-600"} space-x-3 flex items-center`}>
                    <RepeatIcon  
                    onClick={handleCreateRetweet}
                    className="cursor-pointer"/>
                    <p>54</p>
                </div>
                <div className={`${true? "text-pink-600":"text-grey-600"} space-x-3 flex items-center`}>
                    {true? <Favorite  
                    onClick={handleCreateRetweet}
                    className="cursor-pointer"/>: <FavoriteOutlined onClick={handleLiketweet} className="cursor-pointer"/>}
                    <p>549</p>
                </div>
                <div className="space-x-3 flex items center text-grey-600">
                <BarChart className="cursor-pointer" onClick={handleOpenReplyModel}/>
                <p>4540</p>
                </div>
                <div className="space-x-3 flex items center text-grey-600">
                <FileUpload className="cursor-pointer" onClick={handleOpenReplyModel}/>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
