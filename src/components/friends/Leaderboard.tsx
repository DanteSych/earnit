"use client";

const Leaderboard = () => {
    return (
        <div className="mt-2">
            <div className="w-full flex items-center space-x-2">
                <p className="px-2">No</p>
                <p className="px-2 w-full">User</p>
                <p className="px-2">Earn</p>
            </div>
            <hr className="border-white/10" />
            <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                <p className="px-2 font-semibold">1</p>
                <p className="px-2 w-full">John</p>
                <p className="px-2">968</p>
            </div>
            <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                <p className="px-2 font-semibold">2</p>
                <p className="px-2 w-full">Jeff</p>
                <p className="px-2">968</p>
            </div>
            <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                <p className="px-2 font-semibold">3</p>
                <p className="px-2 w-full">James</p>
                <p className="px-2">900</p>
            </div>
            <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                <p className="px-2 font-semibold">4</p>
                <p className="px-2 w-full">Jude</p>
                <p className="px-2">860</p>
            </div>
            <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                <p className="px-2 font-semibold">5</p>
                <p className="px-2 w-full">Jhonny</p>
                <p className="px-2">820</p>
            </div>
        </div>
    )
};

export default Leaderboard;