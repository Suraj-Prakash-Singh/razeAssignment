import Image from "next/image";
import clgLogo from "@/public/clg.jpeg"

const EducationInfo = () => {
    return (
        <div className="flex w-full items-start justify-start mb-8">
            <Image className="w-12 ml-4 mr-2 cursor-pointer" src={clgLogo} alt="companyLogo"></Image>
            <div className="flex flex-col items-start justify-center">
                <h2 className="font-medium">Chandigarh Group Of Colleges</h2>
                <p className="text-sm">Bachelor of Technology - BTech, Computer Science</p>
                <p className="text-gray-500 text-sm">2019 - 2023</p>
                <p className="text-sm">Grade: 8.3 CGPA</p>
            </div>
        </div>
    )
}
export default EducationInfo;