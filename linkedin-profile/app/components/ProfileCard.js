"use client"
import Image from "next/image";
import bg from "@/public/bg.svg"
import ProfileCardBtns from "./ProfileCardBtns";
import ProfileCardEditModal from "./ProfileCardEditModal";
import profileCardContext from "../utils/profileCardContext";
import { useContext, useState } from "react";

const ProfileCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {profileObject} = useContext(profileCardContext);
    const [profile, setProfile] = useState(profileObject);
    const {name, location, designation} = profile;

    function updateValue(newVal) {
        setProfile(newVal);
    }

    function handleEdit(){
        setIsOpen(true);
    }

    if(isOpen) return <profileCardContext.Provider value={{profile, updateValue}}><ProfileCardEditModal setIsOpen={() => setIsOpen()}/></profileCardContext.Provider>
    
    return(
            <div className="w-7/12 h-max mx-40 my-8 rounded-xl flex flex-col shadow-lg">
                <Image className="w-full h-2/5 rounded-t-xl" alt="backgroundImg" src={bg}></Image>
                <div className="w-full h-auto bg-white flex justify-between pb-8 rounded-b-xl">
                    <div className="w-2/4 h-max mt-8 mx-4">
                        <h1 className="font-semibold text-2xl tracking-wide">{name}</h1>
                        <p>{designation}</p> 
                        <p className="text-gray-500 text-sm my-2">{location} <span className="text-blue-500 font-medium text-sm cursor-pointer hover:underline">Contact info</span></p>
                        <p className="text-blue-500 font-medium text-sm cursor-pointer hover:underline">296 Connections</p>
                        <ProfileCardBtns/>
                    </div>
                    <button className="bg-zinc-300 h-8 mt-6 mr-2 px-4 py-1 rounded-3xl" onClick={handleEdit}>Edit</button>
                </div>
            </div>
    )

}

export default ProfileCard;