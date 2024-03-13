import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

export default function Home() {
  
  return (
    <div className="w-full h-full bg-gray-100">
      <Navbar/>
      <ProfileCard/>
    </div>
  );
}
