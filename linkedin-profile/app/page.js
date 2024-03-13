import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillSection from "./components/SkillSection";

export default function Home() {
  
  return (
    <div className="w-full h-full bg-gray-100">
      <Navbar/>
      <ProfileCard/>
      <ExperienceSection/>
      <EducationSection/>
      <SkillSection/>
    </div>
  );
}
