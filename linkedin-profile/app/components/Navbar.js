const Navbar = () => {

    return (
        <div className="w-full h-max bg-[#FFFFFF] flex shadow-lg">
            <div className="ml-40 mt-4">
                Logo
                <input placeholder="search" className="p-1 m-2 border border-slate-700 rounded-lg"></input>
            </div>
            <div className="w-3/5 h-max flex items-center justify-center mt-4">
                <ul className="w-full flex items-center justify-evenly mt-4 pb-2">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">My Network</li>
                    <li className="cursor-pointer">Jobs</li>
                    <li className="cursor-pointer">Messaging</li>
                    <li className="cursor-pointer">Notification</li>
                    <li className="cursor-pointer">Me</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;