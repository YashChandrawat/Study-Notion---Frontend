import HighLightText from "./HighLightText";
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compareWithOthers from "../../../assets/Images/Compare_with_others.png";
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from "./CTAButton";

const LearningLanguageSection = () => {
  return (
    <div className="mt-[110px] mb-32">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-4xl font-semibold text-center">
          Your Swiss Knife for <HighLightText text={"learning any language"} />
        </div>
        <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="flex items-center justify-center mt-8">
          <img
            src={knowYourProgress}
            alt="Know-your-progress"
            className="object-contain -mr-32"
          />
          <img
            src={compareWithOthers}
            alt="comapre-with-other"
            className="object-contain"
          />
          <img
            src={planYourLessons}
            alt="plan-your-lessons"
            className="object-contain -ml-36"
          />
        </div>
        <div className="w-fit ">
          <CTAButton active={true} linkto={"signup"}>
            <div>Learn More</div>
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
