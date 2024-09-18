"use client";

const Friends = () => {
    return (
        <div className="mt-2">
            <p className="text-lg font-bold">Bring Friends, Unlock Rewards!</p>
            <p className="text-sm text-gray-400">You and your friend will enjoy bonuses and unlock more rewards!</p>

            <div className="w-full flex items-center space-x-2 mt-3">
                <p className="px-2 w-full">User</p>
                <p className="px-2">Reward</p>
            </div>
            <hr className="border-white/10" />
            <button className="text-center font-bold underline text-gray-400 w-full my-8 text-xl">Invite Now +</button>
            <div className="bg-white/10 rounded-xl p-2 flex items-center justify-between">
                <div>
                    <p className="font-semibold">Invite 1 friend</p>
                    <p className="text-gray-400">Each of you will get the bonuses</p>
                </div>
                <p className="mr-1 text-yellow-500 text-lg font-black">$ 1000</p>
            </div>
        </div>
    )
};

export default Friends;