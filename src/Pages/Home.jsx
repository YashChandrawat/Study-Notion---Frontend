import { AiOutlineUpload } from "react-icons/ai";
import { FaBookOpen, FaLock, FaPlay } from "react-icons/fa";
import { LuBadgeCheck } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Common/Footer";
const Home = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="bg-richblack-900 text-white">
        {/* Section 1 - Hero Section */}
        <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4 px-4">
          <div>
            <p className="text-xl text-center text-caribbeangreen-400">
              EDUCATION & ONLINE COURSE
            </p>
          </div>
          <div>
            <p className="text-5xl md:text-8xl leading-tight md:w-[50%] w-[full] mx-auto text-center text-white font-bold">
              Learn Without Limits With Study Notion
            </p>
          </div>
          <div>
            <p className="text-md md:text-lg mx-auto leading-tight w-full md:w-[60%] text-center text-richblack-400 font-medium">
              Start, switch, or advance your career with more and more courses,
              Professional Certificates, and degrees from world-class
              universities and companies.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mt-5">
            <button
              className="p-3 px-4 border border-solid border-yellow-50 rounded-2xl text-richblack-700 bg-yellow-50 hover:bg-yellow-100"
              onClick={() => Navigate("/signup")}
            >
              Join For Free
            </button>
            <button className="text-sm" onClick={() => Navigate("/login")}>
              <u>Learn More</u>
            </button>
          </div>
        </div>

        {/* Section 2 - Who we are */}
        <div className="w-full md:w-[80%] min-h-screen flex flex-col gap-10 mx-auto px-4">
          {/* Top Part */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Left Part */}
            <div className="w-full md:w-1/2 leading-8">
              <p className="text-xl font-medium text-center md:text-left text-caribbeangreen-300">
                WHO WE ARE
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left mb-4">
                Your Online Learning Partner
              </h1>
              <p className="text-gray-600 text-center md:text-left">
                We are a team of passionate educators, technologists, and
                innovators committed to revolutionizing the way people learn.
                Our collective expertise spans various fields, including
                education, technology, designs and so on.
              </p>
            </div>

            {/* Right Part */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 bg-richblack-700 p-6 rounded-md">
              <div className="flex justify-between mb-4">
                <p className="text-xl font-bold text-center md:text-left text-indigo-600">
                  Video Course
                </p>
                <p className="text-lg">(1/110)</p>
              </div>
              <div className="flex justify-between border border-customColor-400 p-4 rounded-md mb-2 bg-customColor-400">
                <div className="flex items-center ">
                  <p className="text-xl mr-2 rounded-full border border-customColor-400 p-2 bg-white text-customColor-400">
                    <FaPlay />
                  </p>
                  <p className="text-white">Introduction</p>
                </div>
                <p className="text-white">7:00</p>
              </div>
              <div className="flex justify-between bg-richblack-600  p-4 rounded-md mb-2">
                <div className="flex items-center ">
                  <p className="text-xl mr-2 rounded-full border border-black p-2 bg-white text-black">
                    <FaLock />
                  </p>
                  <p className="text-white">Social Media</p>
                </div>
                <p>60:00</p>
              </div>
            </div>
          </div>

          {/* Bottom Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 rounded-md text-center bg-richblack-700">
              <p className="text-3xl md:text-4xl text-white mb-4 border-customColor-400 bg-customColor-400 w-fit p-2 rounded-md mx-auto">
                <FaBookOpen />
              </p>
              <h1 className="text-xl md:text-2xl font-bold mb-2">
                Online Courses
              </h1>
              <p className="text-gray-600 text-center md:text-left">
                Online Courses are designed to be engaging, interactive to meet
                the diverse needs of learners. They cover a wide range of
                subjects to enhance the practical knowledge.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-md text-center bg-richblack-700">
              <p className="text-3xl md:text-4xl text-white mb-4 border-customColor-500 bg-customColor-500 w-fit p-2 rounded-md mx-auto">
                <AiOutlineUpload />
              </p>
              <h1 className="text-xl md:text-2xl font-bold mb-2">
                Upgrade Skills
              </h1>
              <p className="text-gray-600 text-center md:text-left">
                These Courses helps in upgrading your skills by providing
                structure learning experiences designed to impart new knowledge,
                develop abilities and enhance competencies.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-md text-center bg-richblack-700">
              <p className="text-3xl md:text-4xl text-white mb-4 border-customColor-600 bg-customColor-600 w-fit p-2 rounded-md mx-auto">
                <LuBadgeCheck />
              </p>
              <h1 className="text-xl md:text-2xl font-bold mb-2">Experience</h1>
              <p className="text-gray-600 text-center md:text-left">
                These Courses helps in gaining experience in different fields
                through flexible and interactive learning which enhance the
                practical knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 - How it works */}
        <div className="w-full md:w-[80%] min-h-screen flex flex-col gap-10 mx-auto px-4 mt-20">
          {/* Top Section */}
          <div className="text-center md:text-start mb-8">
            <p className="text-lg text-gray-600 uppercase text-caribbeangreen-400">
              HOW IT WORKS
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Your Online Learning Journey Made Easy
            </h1>
            <p className="text-gray-700 text-lg">
              Online courses offer a flexible and convenient way for learners to
              acquire new knowledge and skills, regardless of their location or
              schedule.
            </p>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Card 1 */}
            <div className="bg-richblack-700 rounded-lg shadow-md p-6 text-center">
              <p className="text-3xl text-white bg-customColor-400 rounded-full w-fit p-2 mx-auto mb-2">
                01
              </p>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Choose Your Course
              </h2>
              <p className="text-gray-700">
                You can choose any course according to your need and
                requirements.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-richblack-700 rounded-lg shadow-md p-6 text-center">
              <p className="text-3xl text-white bg-customColor-400 rounded-full w-fit p-2 mx-auto mb-2">
                02
              </p>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Sign Up and Pay
              </h2>
              <p className="text-gray-700">
                To start your Online learning journey, Sign Up the Course you
                choosed.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-richblack-700 rounded-lg shadow-md p-6 text-center">
              <p className="text-3xl text-white bg-customColor-400 rounded-full w-fit p-2 mx-auto mb-2">
                03
              </p>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                Learn and Engage
              </h2>
              <p className="text-gray-700">
                Here you can start your online learning journey to develop your
                skills.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4 - Why Choose Us */}
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto py-12 px-4 leading-loose">
          {/* Left - Image Section */}
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <img
              src="https://img.freepik.com/free-photo/young-man-studying-library-using-laptop_23-2149285400.jpg?t=st=1710259957~exp=1710263557~hmac=c513c460528dbcdee9954b77b42976b725b378ea548eac99c8a5b66f53c19c6b&w=360"
              alt="Learning Journey Illustration"
              className="w-full md:w-[70%] md:mx-auto h-auto md:h-full rounded-md object-cover"
            />
          </div>

          {/* Right - Why Choose Us Section */}
          <div className="md:w-1/2">
            {/* Right Section First Section */}
            <div className="mb-8">
              <p className="text-md text-caribbeangreen-400 uppercase font-semibold">
                WHY CHOOSE US
              </p>
              <h1 className="text-3xl md:text-6xl font-bold mb-4">
                Your Learning Journey, Your Way
              </h1>
              <p className="text-gray-700 text-md">
                At our online learning platform, we believe in empowering
                learners to chart their own path and pursue their learning goals
                on their terms.
              </p>
            </div>

            {/* Right Section Second Section */}
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-2 gap-2">
                  <FaBookOpen className="text-customColor-400 text-xl md:text-2xl mr-2" />
                  <p className="font-semibold text-lg">
                    High-Quality Content Course
                  </p>
                </div>
                <p className="text-gray-700 ml-0 md:ml-10">
                  Our online learning platform is committed to providing
                  high-quality content courses that are designed to meet the
                  needs of learners at every level.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-2 gap-2">
                  <FaBookOpen className="text-customColor-400 text-xl md:text-2xl mr-2" />
                  <p className="font-semibold text-lg">
                    Interactive Learning Experience
                  </p>
                </div>
                <p className="text-gray-700 ml-0 md:ml-10">
                  These Courses involves active participation, engagement, and
                  collaboration between learners, instructors, and course
                  materials.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-2 gap-2">
                  <FaBookOpen className="text-customColor-400 text-xl md:text-2xl mr-2" />
                  <p className="font-semibold text-lg">
                    Exceptional Student Support
                  </p>
                </div>
                <p className="text-gray-700 ml-0 md:ml-10">
                  It involves providing comprehensive assistance, guidance, and
                  resources to learners to ensure their success and satisfaction
                  throughout their learning journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 - Join Our Community */}
        <div className="flex flex-col md:flex-row md:w-[90%] md:mx-auto justify-center items-center md:h-screen sm:h-auto leading-8">
          {/* Top Section of Section 5 */}
          <div className="text-center md:text-start mb-12 leading-10 md:w-[50%] md:pr-12">
            <p className="text-lg text-caribbeangreen-400 uppercase font-semibold mb-2">
              CALL TO ACTION
            </p>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Join Study Notion Community
            </h1>
            <p className="text-gray-700">
              To Join our Community and Start your learning journey You can
              contact to us.
            </p>
            <div className="flex flex-col items-center md:items-start mt-6 md:mt-2 gap-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md"
                onClick={() => Navigate("/contact")}
              >
                Contact Us
              </button>
              <p className="text-gray-600 flex items-center ">
                <FaLock className="mr-2" /> Your data is completely secure with
                us. We don't share with anyone.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <img
            src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1710319848~exp=1710323448~hmac=e747f053dc66e2c118dea606e6360ccf2a6163813dfb9e2b61e4f4bcec77df3e&w=740"
            alt="Study Notion Community"
            className="w-full md:w-1/3 max-w-xl rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
