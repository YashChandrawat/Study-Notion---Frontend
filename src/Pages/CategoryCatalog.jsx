import { useEffect, useState } from "react";
import { fetchCourseCategories } from "../services/operations/courseDetailsAPI";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Common/Footer";
import { useSelector } from "react-redux";

const CategoryCatalog = () => {
  const { loading } = useSelector((state) => state.profile);
  const imagesUrl = [
    {
      name: "Android",
      image:
        "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?t=st=1710565988~exp=1710569588~hmac=a2c3355ea15f175778156dc65d3ea807402d7555ef958daf8578ef81e5d26c71&w=1060",
    },
    {
      name: "Web Dev",
      image:
        "https://yt3.googleusercontent.com/zvqp-zbY1gF-PlnaM70qLxc5JHEmgI7m3Zed7rNTJ2rKda1o9LudRJ4Zalc3rVjsxoTjq13aRw=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      name: "Python",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu44MNHCE6CvQWY9Om0IgwksWp2ftVSmqauzkfEWmtdw&s",
    },
    {
      name: "DSA",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhjoXPApwLSF4RU4bm5ZTDDT0u4Wyq0elS-aPE2pfQRw&s",
    },
    {
      name: "AIML",
      image:
        "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=1920%2C1920&ssl=1",
    },
    {
      name: "AIML",
      image:
        "https://media.geeksforgeeks.org/wp-content/uploads/20240213174747/dsa-new.webp",
    },
    {
      name: "AIML",
      image:
        "https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?t=st=1710565988~exp=1710569588~hmac=a2c3355ea15f175778156dc65d3ea807402d7555ef958daf8578ef81e5d26c71&w=1060",
    },
  ];
  const navigate = useNavigate();
  const [response, setResponse] = useState([]);
  useEffect(() => {
    async function fetchCategories() {
      const data = await fetchCourseCategories();
      setResponse(data);
      console.log("Data of course category : ", data);
    }

    fetchCategories();
  }, []);

  const handleClick = (index) => {
    const data = response[index]?.name.toLowerCase().replace(/\s+/g, "-");
    navigate(`/catalog/${data}`);
    console.log("Corrected Name is : ", data);
  };

  // If loading or no response yet, display loader
  if (loading || response.length === 0) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto mt-8 p-4 mb-10">
        <p className="text-3xl font-semibold text-richblack-50 mb-6">
          All Categories are listed below
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {response.map((category, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <img
                src={imagesUrl[index]?.image}
                alt="Category Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-richblack-5 mb-2">
                  {category?.name}
                </h2>
                <p className="text-richblack-300 mb-4">
                  {category?.description}
                </p>
                <button
                  onClick={() => handleClick(index)}
                  className="bg-yellow-50 text-black py-2 px-4 rounded-md font-semibold hover:bg-yellow-600 transition-colors"
                >
                  See Courses
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryCatalog;
