"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import friendsImage from "@/assets/friends.png";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Leaderboard from "@/components/friends/Leaderboard";
import Friends from "@/components/friends/Friends";

export default function Page() {
    const router = useRouter();
    const [TabActive, setTabActive] = useState("Friends");

    return (
        <div className="relative bg-[#0d162e] pb-24 h-screen">
            <div className="flex flex-col h-screen z-50 w-full">
                <div className="p-5 h-full flex-grow flex flex-col overflow-y-auto z-50">
                    <Header />
                    <Image src={friendsImage} alt="Task Image" width={500} height={500} />
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <div>
                            <p className="text-center font-extrabold text-3xl mt-4">Invite friends!</p>
                            <p className="text-center text-sm text-gray-400 mb-2">Refer a friend and boost your progress with awesome rewards! Start sharing now.</p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-full bg-white/10 p-2 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <svg className="text-gray-300 w-6 h-6 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor"><path d="M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" /></svg>
                            <p>Invite Friends</p>
                        </div>
                        <div>
                            <button onClick={() => { }} className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full py-2 px-4">Copy</button>
                        </div>
                    </div>
                    <div className="mb-1 rounded-full bg-white/10 p-2 grid grid-cols-2 gap-x-2">
                        <button onClick={() => { setTabActive("Friends") }} className={`${TabActive === "Friends" ? 'bg-gradient-to-t from-purple-500/50 to-pink-500/50 border-4 border-white/10' : 'bg-white/10'} rounded-full py-2 px-4`}>Friends</button>
                        <button onClick={() => { setTabActive("Leaderboard") }} className={`${TabActive === "Leaderboard" ? 'bg-gradient-to-t from-purple-500/50 to-pink-500/50 border-4 border-white/10' : 'bg-white/10'} rounded-full py-2 px-4`}>Leaderboard</button>
                    </div>
                    {TabActive === "Friends" ?
                        <Friends />
                        :
                        <Leaderboard />
                    }
                </div>
                <Navbar />
            </div>
            <div className="absolute bg-gradient-to-t from-cyan-500 via-cyan-500/50 to-cyan-500/0 bottom-0 left-0 w-full h-56"></div>
        </div>
    )
}