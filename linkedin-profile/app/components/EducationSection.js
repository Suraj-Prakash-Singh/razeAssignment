import EducationInfo from "./EducationInfo";

const EducationSection = () => {
    return (
        <div className="w-7/12 h-max mx-40 my-8 rounded-xl flex shadow-lg bg-white flex-col items-center">
            <div className="w-full h-max flex items-center justify-between my-6">
                <h1 className="font-semibold text-xl tracking-wide ml-4">Education</h1>
                <button className="bg-zinc-300 h-8 px-4 py-1 rounded-3xl mr-2">Edit</button>
            </div>
            <EducationInfo/>
        </div>
    )
}

export default EducationSection;