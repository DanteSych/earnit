"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import coinImg from "@/assets/coin.png";
import energyImg from "@/assets/energy.png";
import giftImg from "@/assets/components/gift.png";
import calendarImg from "@/assets/components/calendar.png";
import coinsImg from "@/assets/components/coin.png";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function Tap() {
    const router = useRouter();

    return (
        <div className="relative bg-[#0d162e] pb-24 h-screen">
            <div className="flex flex-col h-screen z-50 w-full">
                <div className="p-5 h-full flex-grow flex flex-col overflow-y-auto z-50">
                    <Header />
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <div>
                            <p className="text-center text-gray-400 mb-2">Your Tokens</p>
                            <p className="font-extrabold text-4xl">10,652,231</p>
                            <p className="text-center">Coins</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-1.5 my-4">
                        <div onClick={() => { router.push('/daily-reward') }} className="cursor-pointer flex items-center space-x-2 justify-center rounded-full w-full min-w-fit bg-white/10 p-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-t from-purple-500 to-pink-500 p-0.5">
                                <Image className="w-full h-full rounded-full" src={calendarImg} alt="" width={100} height={100} />
                            </div>
                            <div className="pr-1.5">
                                <p className="leading-none">Daily</p>
                            </div>
                        </div>
                        <div onClick={() => { router.push('/task') }} className="cursor-pointer flex items-center space-x-2 justify-center rounded-full w-full min-w-fit bg-white/10 p-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-t from-purple-500 to-pink-500 p-0.5">
                                <Image className="w-full h-full rounded-full" src={coinsImg} alt="" width={100} height={100} />
                            </div>
                            <div className="pr-1.5">
                                <p className="leading-none">Double</p>
                            </div>
                        </div>
                        <div onClick={() => { router.push('/airdrop') }} className="cursor-pointer flex items-center space-x-2 justify-center rounded-full w-full min-w-fit bg-white/10 p-2">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-t from-purple-500 to-pink-500 p-0.5">
                                <Image className="w-full h-full rounded-full" src={giftImg} alt="" width={100} height={100} />
                            </div>
                            <div className="pr-1.5">
                                <p className="leading-none">Airdrop</p>
                            </div>
                        </div>
                    </div>
                    <Image src={coinImg} alt="" width={500} height={500} />
                    <div className="mt-2 flex items-center space-x-3 justify-between">
                        <div className="flex items-center space-x-2 justify-center mb-1 rounded-full min-w-fit bg-white/10 p-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-t from-purple-500 to-pink-500 p-1">
                                <Image className="w-full h-full rounded-full" src={energyImg} alt="" width={100} height={100} />
                            </div>
                            <div className="pr-1.5">
                                <p className="font-bold leading-none">10,000</p>
                                <p className="text-xs text-gray-400">Taps</p>
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <p className="text-xs text-gray-400 mb-1">Remaining:</p>
                            <div className="bg-white/10 rounded-full p-2">
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-[#ff9f00] h-2.5 rounded-full" style={{ width: '100%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Navbar />
            </div>
            <div className="absolute bg-gradient-to-t from-cyan-500 via-cyan-500/50 to-cyan-500/0 bottom-0 left-0 w-full h-56"></div>
        </div>
    )
}