import { useState } from "react";
import profileCardContext from "../utils/profileCardContext";
import { useContext } from "react";

const ProfileCardEditModal = ({ setIsOpen }) => {
    console.log("ProfileCardModal render");
    const [nameInput, setNameInput] = useState("");
    const [desiInput, setDesiInput] = useState("");
    const [locInput, setLocInput] = useState("");
    const {updateValue}  = useContext(profileCardContext);

    function handleSubmit(){
        const newObj = {
            name: nameInput,
            designation: desiInput,
            location: locInput
        }
        updateValue(newObj);
        setIsOpen(false);
    }


    return (
        <div className="w-full h-full mx-auto my-auto flex items-center justify-center">
            <div className="w-full h-full mx-auto my-auto flex flex-col justify-center items-center">
            <input className="my-5 p-2 border border-slate-700" id="name" placeholder="Name" 
                value={nameInput} onChange={(e) => setNameInput(e.target.value)}>    
            </input>
            <input className="mb-5 p-2 border border-slate-700" id="designation" placeholder="Designation"
                value={desiInput} onChange={(e) => setDesiInput(e.target.value)}>
            </input>
            <input className="mb-5 p-2 border border-slate-700" id="location" placeholder="Location"
                value={locInput} onChange={(e) => setLocInput(e.target.value)}>
            </input>
            <button className="m-5 bg-slate-950 text-white w-max h-max px-3 py-1" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default ProfileCardEditModal;