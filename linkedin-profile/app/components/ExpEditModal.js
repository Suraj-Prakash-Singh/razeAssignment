const ExpEditModal = ({ setIsOpen }) => {

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData);
        // for (let [key, value] of formData.entries()) {
        //     console.log(`${key}: ${value}`);
        // }
        setIsOpen(false);
    }
    
    return (
        <div className="w-screen h-screen bg-[rgba(49,49,49,0.8)] fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center">
            <form className="w-full h-full mx-auto my-auto flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <input className="w-2/6 my-5 p-2 border border-slate-700" name="position" placeholder="Position"/>    
                <input className="w-2/6 mb-5 p-2 border border-slate-700" id="name" placeholder="Company name"/>
                <input className="w-2/6 mb-5 p-2 border border-slate-700" id="type" placeholder="start date"/>
                <input className="w-2/6 mb-5 p-2 border border-slate-700" id="type" placeholder="Position Type"/>
                <input className="w-2/6 mb-5 p-2 border border-slate-700" id="type" placeholder="end date"/>
                <input className="w-2/6 mb-5 p-2 border border-slate-700" id="type" placeholder="duration"/>
                <input className="w-2/6 mb-5 p-2 border border-slate-700" id="type" placeholder="location"/>
                <input className="w-2/6 mb-5 p-2 border border-slate-700" id="type" placeholder="onsite/remote"/>
                <input className="w-2/6 mb-5 p-2 border border-slate-700" id="type" placeholder="description"/>
                <button className="m-5 bg-slate-950 text-white w-max h-max px-3 py-1" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default ExpEditModal;