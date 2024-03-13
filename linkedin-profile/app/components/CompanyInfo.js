import Image from "next/image";
import amzLogo from "@/public/amazon_logo.jpeg"

const CompanyInfo = () => {
    return (
        <div className="flex w-full items-start justify-start mb-8">
            <Image className="w-12 ml-4 mr-2 cursor-pointer" src={amzLogo} alt="companyLogo"></Image>
            <div className="flex flex-col items-start justify-center">
                <h2 className="font-medium">Software Development Engineer Intern</h2>
                <p>Amazon · Internship</p>
                <p className="text-gray-500 text-sm">Jan 2023 - Jun 2023 · 6 mos</p>
                <p className="text-gray-500 text-sm">Hyderabad, Telangana, India · On-site</p>
                <p className="mt-6 text-sm">Part of the Amazon/Alexa Data Services (ADS) org</p>
            </div>
        </div>
    )
}
export default CompanyInfo;