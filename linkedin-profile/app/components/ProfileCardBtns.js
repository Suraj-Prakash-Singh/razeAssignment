const ProfileCardBtns = () => {
    return (
        <div className="w-full h-max flex items-center my-4 gap-2">
            <button className="bg-blue-500 text-white rounded-3xl px-3 py-1 cursor-pointer">Open to</button>
            <button className="bg-white text-blue-500 rounded-3xl px-3.5 py-1 border border-blue-500">Add profile section</button>
            <button className="bg-white text-gray-500 rounded-3xl px-3 py-1 border border-gray-500">More</button>
        </div>
    )
}
export default ProfileCardBtns;