"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import taskImg from "@/assets/fit/task.png";
import calendarImg from "@/assets/components/calendar.png";
import { useRouter } from "next/navigation";
import Regular from "@/components/task/Regular";
import Collabs from "@/components/task/Collabs";
import Events from "@/components/task/Events";
import Header from "@/components/Header";

export default function Page() {
    const router = useRouter();
    const [TabActive, setTabActive] = useState("Regular");

    return (
        <div className="relative bg-[#0d162e] pb-24 h-screen">
            <div className="flex flex-col h-screen z-50 w-full">
                <div className="p-5 h-full flex-grow flex flex-col overflow-y-auto z-50">
                    <Header />
                    <Image src={taskImg} alt="Task Image" width={500} height={500} />
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <div>
                            <p className="text-center font-extrabold text-3xl">Get more coins!</p>
                            <p className="text-center text-sm text-gray-400 mb-2">Complete tasks to earn more coins and boost your progress!</p>
                        </div>
                    </div>
                    <div className="mb-4 rounded-full bg-white/10 p-2 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="bg-white/1 border-4 border-white/10 rounded-full p-2">
                                <Image src={calendarImg} alt="" width={25} height={25} />
                            </div>
                            <p>Check Daily Reward!</p>
                        </div>
                        <div>
                            <button onClick={() => { router.push('/daily-reward') }} className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full py-2 px-4">Go</button>
                        </div>
                    </div>
                    <div className="mb-1 rounded-full bg-white/10 p-2 grid grid-cols-3 gap-x-2">
                        <button onClick={() => { setTabActive("Regular") }} className={`${TabActive === "Regular" ? 'bg-gradient-to-t from-purple-500/50 to-pink-500/50 border-4 border-white/10' : 'bg-white/10'} rounded-full py-2 px-4`}>Regular</button>
                        <button onClick={() => { setTabActive("Collabs") }} className={`${TabActive === "Collabs" ? 'bg-gradient-to-t from-purple-500/50 to-pink-500/50 border-4 border-white/10' : 'bg-white/10'} rounded-full py-2 px-4`}>Collabs</button>
                        <button onClick={() => { setTabActive("Events") }} className={`${TabActive === "Events" ? 'bg-gradient-to-t from-purple-500/50 to-pink-500/50 border-4 border-white/10' : 'bg-white/10'} rounded-full py-2 px-4`}>Events</button>
                    </div>
                    {TabActive === "Regular" ?
                        <Regular />
                        :
                        TabActive === "Collabs" ?
                            <Collabs />
                            :
                            <Events />
                    }
                </div>
                <Navbar />
            </div>
            <div className="absolute bg-gradient-to-t from-cyan-500 via-cyan-500/50 to-cyan-500/0 bottom-0 left-0 w-full h-56"></div>
        </div>
    )
}