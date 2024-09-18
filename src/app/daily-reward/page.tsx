"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import mineImg from "@/assets/fit/mine.png";
import dailyImg from "@/assets/banner/daily-reward.png";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    return (
        <div className="relative bg-[#0d162e] pb-24 h-screen">
            <div className="flex flex-col h-screen z-50 w-full">
                <div className="p-5 h-full flex-grow flex flex-col overflow-y-auto z-50">
                    <Image className="rounded-2xl" src={dailyImg} alt="" width={500} height={500} />
                    <p className="text-gray-300 text-center mt-5">Earn daily rewards simply by logging in! With each consecutive day, your rewards increase, helping you gain more coins and unlock special bonuses. Keep coming back daily to maximize your rewards!</p>
                    <p className="mt-6 text-lg font-bold">Daily Reward</p>
                    <div className="grid grid-cols-4 gap-2 mt-2">
                        <div className="bg-gray-700/50 rounded-xl p-2">
                            <Image className="rounded-2xl w-20 h-auto filter grayscale" src={mineImg} alt="" width={500} height={500} />
                            <p className="font-black text-center my-0.5 text-gray-400">1K</p>
                            <button disabled className="bg-white/10 rounded-full py-1 w-full mt-1 text-gray-400">Claim</button>
                        </div>
                        <div className="bg-gray-700/50 rounded-xl p-2">
                            <Image className="rounded-2xl w-20 h-auto" src={mineImg} alt="" width={500} height={500} />
                            <p className="font-black text-center my-0.5">1K</p>
                            <button className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full py-1 w-full mt-1">Claim</button>
                        </div>
                        <div className="bg-gray-700/50 rounded-xl p-2">
                            <Image className="rounded-2xl w-20 h-auto" src={mineImg} alt="" width={500} height={500} />
                            <p className="font-black text-center my-0.5">1K</p>
                            <button className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full py-1 w-full mt-1">Claim</button>
                        </div>
                        <div className="bg-gray-700/50 rounded-xl p-2">
                            <Image className="rounded-2xl w-20 h-auto" src={mineImg} alt="" width={500} height={500} />
                            <p className="font-black text-center my-0.5">1K</p>
                            <button className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full py-1 w-full mt-1">Claim</button>
                        </div>
                        <div className="bg-gray-700/50 rounded-xl p-2">
                            <Image className="rounded-2xl w-20 h-auto" src={mineImg} alt="" width={500} height={500} />
                            <p className="font-black text-center my-0.5">1K</p>
                            <button className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full py-1 w-full mt-1">Claim</button>
                        </div>
                        <div className="bg-gray-700/50 rounded-xl p-2">
                            <Image className="rounded-2xl w-20 h-auto" src={mineImg} alt="" width={500} height={500} />
                            <p className="font-black text-center my-0.5">1K</p>
                            <button className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full py-1 w-full mt-1">Claim</button>
                        </div>
                        <div className="bg-gray-700/50 rounded-xl p-2">
                            <Image className="rounded-2xl w-20 h-auto" src={mineImg} alt="" width={500} height={500} />
                            <p className="font-black text-center my-0.5">1K</p>
                            <button className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full py-1 w-full mt-1">Claim</button>
                        </div>
                        <div className="bg-gray-700/50 rounded-xl p-2">
                            <Image className="rounded-2xl w-20 h-auto" src={mineImg} alt="" width={500} height={500} />
                            <p className="font-black text-center my-0.5">1K</p>
                            <button className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full py-1 w-full mt-1">Claim</button>
                        </div>
                    </div>
                </div>
                <Navbar />
            </div>
            <div className="absolute bg-gradient-to-t from-cyan-500 via-cyan-500/50 to-cyan-500/0 bottom-0 left-0 w-full h-56"></div>
        </div>
    )
}