import { MdDone } from "react-icons/md";
import Footer from "../Components/Common/Footer";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-white tracking-widest">
        {/* Section 1 - What we do */}
        <div className="container mx-auto py-12 px-4 md:w-screen md:h-screen flex flex-col justify-center items-center gap-2">
          {/* Section 1.1 Of Section 1 */}
          <div className="md:text-center sm:text-left mb-8">
            <p className="text-lg text-caribbeangreen-400 uppercase font-semibold tracking-widest">
              WHAT WE DO
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Inspiring discovery through creativity.
            </h1>
            <p className="text-gray-700 md:w-[60%] mx-auto leading-8 tracking-widest">
              Study Notion is an education and online course with thousands of
              classes for creative and curious people, on topics including
              illustration, design, photography, video, freelancing, and more.
              On Study Notion, members come together to find inspiration and
              take the next step in their creative journey.
            </p>
          </div>

          {/* Section 1.2 Of Section 1 */}
          <h1 className="text-center text-2xl font-semibold mb-6">
            At Study Notion, We Empower:
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:w-auto w-full gap-8 text-white">
            {/* CARD 1 */}
            <div className="bg-richblack-700 p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-bold mb-4">Members To</h2>
              <ul className="text-gray-700">
                <li>Get Inspired</li>
                <li>Learn New Skills</li>
                <li>Make Discoveries</li>
              </ul>
            </div>

            {/* CARD 2 */}
            <div className="bg-richblack-700 p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-bold mb-4">Instructors To</h2>
              <ul className="text-gray-700">
                <li>Share Expertise</li>
                <li>Earn Money</li>
                <li>Give Back</li>
              </ul>
            </div>

            {/* CARD 3 */}
            <div className="bg-richblack-700 p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-bold mb-4">Employees To</h2>
              <ul className="text-gray-700">
                <li>Be Curious.</li>
                <li>Make an Impact</li>
                <li>Live a Full Life</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2 - Your Benefits */}
        <div className="flex flex-col mt-10 px-6 h-auto md:h-screen md:flex-row justify-center items-center md:w-[80%] mx-auto ">
          {/* Left Section */}
          <div className="md:mr-4 md:w-full leading-8 tracking-widest">
            {/* Top Section of Left Side */}
            <div className="mb-8">
              <p className="text-lg text-caribbeangreen-400 uppercase font-semibold mb-2">
                YOUR BENEFITS
              </p>
              <h1 className="text-5xl font-bold mb-4">
                Benefits of Learning with Study Notion
              </h1>
              <p className="text-gray-700">
                Study Notion provides the creative and flexible courses to the
                learners according tt their needs. It has
              </p>
            </div>
            {/* Bottom Section of Left Side */}
            <div>
              <section className="flex items-center mb-4">
                <MdDone className="text-customColor-400 text-3xl mr-4" />
                <h2 className="text-lg font-semibold">Flexible Learning</h2>
              </section>
              <section className="flex items-center mb-4">
                <MdDone className="text-customColor-400 text-3xl mr-4" />
                <h2 className="text-lg font-semibold">Quality Instruction</h2>
              </section>
              <section className="flex items-center mb-4">
                <MdDone className="text-customColor-400 text-3xl mr-4" />
                <h2 className="text-lg font-semibold">Cost-Effective</h2>
              </section>
            </div>
          </div>
          {/* Right Section */}
          <div className="md:ml-4 md:w-full ">
            {/* Top Section of Right Side */}
            <div className="mb-8">
              <img
                src="https://educo.tokotema.com/wp-content/uploads/2023/05/Advertising-2.jpg"
                alt="Benefits Section"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            {/* Bottom Section of Right Side */}
            <div>
              <h1 className="text-3xl font-bold mb-4">
                Explore Inspiring Online Courses
              </h1>
              {/* Capsule Section */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-caribbeangreen-100 py-2 px-4 rounded-full text-gray-700">
                  Web Development
                </div>
                <div className="bg-caribbeangreen-5 py-2 px-4 rounded-full text-black">
                  Graphic Design
                </div>
                <div className="bg-caribbeangreen-5 py-2 px-4 rounded-full text-black">
                  Android Development
                </div>
                <div className="bg-caribbeangreen-5 py-2 px-4 rounded-full text-black">
                  Programming Language
                </div>
                <div className="bg-caribbeangreen-5 py-2 px-4 rounded-full text-black">
                  Technologies
                </div>
                <div className="bg-caribbeangreen-5 py-2 px-4 rounded-full text-black">
                  Social Media
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - Know More */}
        <div className="flex flex-col md:h-screen h-auto w-screen justify-center items-center max-w-7xl mx-auto py-12 px-4">
          {/* Left Section */}
          <div className="md:mr-4 md:w-[80%]">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">
              More About Study Notion
            </h1>
            {/* Top Section */}
            <div className="mb-8 flex gap-6 text-center md:flex-nowrap flex-wrap">
              {/* Card 1 */}
              <div className="mb-6 bg-richblack-700 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">
                  How To Get Started
                </h2>
                <p className="text-gray-700 mb-4">
                  Sign Up and start your online learning journey to empower your
                  skills.
                </p>
                <button className="text-customColor-400 font-bold py-2 px-4 rounded-md">
                  Learn More
                </button>
              </div>
              {/* Card 2 */}
              <div className="mb-6 bg-richblack-700 p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">
                  Become Instructor
                </h2>
                <p className="text-gray-700 mb-4">
                  Create new courses and upload them for learners to empower
                  their skills.
                </p>
                <button className="text-customColor-400 font-bold py-2 px-4 rounded-md">
                  Learn More
                </button>
              </div>
              {/* Card 3 */}
              <div className="mb-6 bg-richblack-700 p-4 rounded-lg ">
                <h2 className="text-xl font-semibold mb-2">Read More</h2>
                <p className="text-gray-700 mb-4">
                  Connect with us to know more about us and our courses in
                  detail.
                </p>
                <button className="text-customColor-400 font-bold py-2 px-4 rounded-md">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className="md:ml-4 md:w-[80%] bg-richblack-5 text-black p-6 rounded-xl">
            {/* Bottom Section */}
            <div className="flex flex-col text-center ">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Try It For Free
              </h1>
              <p className="text-gray-700 mb-4 w-[60%] mx-auto">
                Enroll in any of the course to gain the access to the course
                materials and resources.
              </p>
              <button
                onClick={() => navigate("/signup")}
                className="bg-yellow-50 hover:bg-yellow-5 text-black w-fit mx-auto font-bold py-2 px-4 rounded-md"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
