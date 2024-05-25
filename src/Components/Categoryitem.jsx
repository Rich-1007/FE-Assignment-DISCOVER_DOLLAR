import React, { useState } from "react";
import {
  IoChevronDown,
  IoChevronForwardOutline,
  IoChevronUpSharp,
} from "react-icons/io5";

import download1 from "../assets/Icons/download-1.jpg";
import download2 from "../assets/Icons/download-2.jpg";
import download3 from "../assets/Icons/download-3.jpg";
import download4 from "../assets/Icons/download-4.jpg";
import download5 from "../assets/Icons/download-5.jpg";
import download6 from "../assets/Icons/download-6.jpg";
import download7 from "../assets/Icons/download-7.jpg";
import download8 from "../assets/Icons/download-8.jpg";
import download9 from "../assets/Icons/download-9.jpg";

// import download from "../assets/Icons/download.jpg"

// import NestedSubcategories from "./NestedSubcategories";
import SubcategoriesItem from "./SubcategoriesItem";


const Categoryitem = ({ item, index }) => {
  
  
//   "When I deployed my app on Netlify, the images were not showing up because I could't import them in "data.json" .
// I had to update my code to import all the images and map them again in the components.
// It worked fine on my local machine, but there was an issue after deploying.
// So i have to code this bellow imgdata."
  const imgdata = [
    download1,
    download2,
    download3,
    download4,
    download5,
    download6,
    download7,
    download8,
    download9,
  ];
  const [isDown, setIsDown] = useState(false);
  //   console.log(item);

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setIsDown(true)}
      onMouseLeave={() => setIsDown(false)}
    >
      <div className="flex justify-center">
        <img src={imgdata[index]} className=" w-14 object-contain" alt="" />
      </div>
      <div className="text-base text-black text-center  flex flex-row justify-center items-center gap-1">
        {item.title}

        {item.subcategories &&
          (isDown ? (
            <IoChevronDown
              size={18}
              className="text-black  rotate-180 duration-300"
            />
          ) : (
            <IoChevronDown size={18} className="text-black duration-300 " />
          ))}
      </div>

      <div className="absolute flex bg-white text-gray-600  shadow-2xl  text-xs py-5  flex-col rounded-xl ">
        {isDown &&
          item.subcategories &&
          item.subcategories.map((item, index) => (
            <SubcategoriesItem item={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Categoryitem;
