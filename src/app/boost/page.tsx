"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function Page() {
    const [IsApprove, setIsApprove] = useState(false);
    return (
        <div className="relative bg-[#0d162e] pb-24 h-screen">
            <div className="flex flex-col h-screen z-50 w-full">
                <div className="p-5 h-full flex-grow flex flex-col overflow-y-auto z-50">
                    <Header />
                    <p className="text-center uppercase text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Boost</p>
                    <p className="text-gray-300 text-center mb-2">Boost your gameplay with powerful upgrades and features, giving you the edge to progress faster and achieve more.</p>
                    <div className="mt-3">
                        <div className="mt-2 rounded-xl grid grid-cols-2 gap-2">
                            <div className="bg-white/10 backdrop-blur border-4 border-white/10 rounded-xl p-2">
                                <p className="font-semibold">Multitap</p>
                                <hr className="border-2 border-white/10 my-3" />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-xs">Current</p>
                                        <p className="text-gray-400 text-xs">Lv. <span className="text-white text-sm">1</span></p>
                                        <p className="text-gray-400 text-xs"><span className="text-white text-sm">+1</span></p>
                                    </div>
                                    <div className="text-end">
                                        <p className="text-gray-400 text-xs">Upgrade</p>
                                        <p className="text-gray-400 text-xs">Lv. <span className="text-white text-sm">2</span></p>
                                        <p className="text-gray-400 text-xs"><span className="text-white text-sm">+2</span></p>
                                    </div>
                                </div>
                                {IsApprove ?
                                    <div className="flex items-center space-x-6">
                                        <button onClick={() => { setIsApprove(false) }} className="cursor-pointer text-sm mt-2 px-2 w-full rounded-lg bg-white/10 text-white w-full py-1.5 leading-none">Cancel</button>
                                        <button onClick={() => { setIsApprove(false) }} className="cursor-pointer text-sm mt-2 px-2 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full py-1.5 leading-none">Buy</button>
                                    </div>
                                    :
                                    <div onClick={() => { setIsApprove(true) }} className="cursor-pointer text-sm mt-2 flex items-center justify-center px-2 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full py-1.5">
                                        <p className="leading-none"><span className="text-yellow-500">$</span> 5,000</p>
                                    </div>
                                }
                            </div>
                            <div className="bg-white/10 backdrop-blur border-4 border-white/10 rounded-xl p-2">
                                <p className="font-semibold">Recharging Speed</p>
                                <hr className="border-2 border-white/10 my-3" />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-xs">Current</p>
                                        <p className="text-gray-400 text-xs">Lv. <span className="text-white text-sm">1</span></p>
                                        <p className="text-gray-400 text-xs"><span className="text-white text-sm">24h</span></p>
                                    </div>
                                    <div className="text-end">
                                        <p className="text-gray-400 text-xs">Upgrade</p>
                                        <p className="text-gray-400 text-xs">Lv. <span className="text-white text-sm">2</span></p>
                                        <p className="text-gray-400 text-xs"><span className="text-white text-sm">20h</span></p>
                                    </div>
                                </div>
                                <div className="cursor-pointer text-sm mt-2 flex items-center justify-center px-2 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full py-1.5">
                                    <p className="leading-none"><span className="text-yellow-500">$</span> 2,500</p>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur border-4 border-white/10 rounded-xl p-2">
                                <p className="font-semibold">Energy Limit</p>
                                <hr className="border-2 border-white/10 my-3" />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-xs">Current</p>
                                        <p className="text-gray-400 text-xs">Lv. <span className="text-white text-sm">1</span></p>
                                        <p className="text-gray-400 text-xs"><span className="text-white text-sm">1000</span></p>
                                    </div>
                                    <div className="text-end">
                                        <p className="text-gray-400 text-xs">Upgrade</p>
                                        <p className="text-gray-400 text-xs">Lv. <span className="text-white text-sm">2</span></p>
                                        <p className="text-gray-400 text-xs"><span className="text-white text-sm">2000</span></p>
                                    </div>
                                </div>
                                <div className="cursor-pointer text-sm mt-2 flex items-center justify-center px-2 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full py-1.5">
                                        <p className="leading-none"><span className="text-yellow-500">$</span> 5,000</p>
                                    </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur border-4 border-white/10 rounded-xl p-2">
                                <p className="font-semibold">Auto Tap</p>
                                <hr className="border-2 border-white/10 my-3" />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-xs">Current</p>
                                        <p className="text-gray-400 text-xs">Lv. <span className="text-white text-sm">5</span></p>
                                        <p className="text-gray-400 text-xs"><span className="text-white text-sm">+25</span></p>
                                    </div>
                                    <div className="text-end">
                                        <p className="text-gray-400 text-xs">Upgrade</p>
                                        <p className="text-gray-400 text-xs">Lv. <span className="text-white text-sm">Max</span></p>
                                        <p className="text-gray-400 text-xs"><span className="text-white text-sm">Max</span></p>
                                    </div>
                                </div>
                                <div className="select-none text-sm mt-2 px-2 w-full rounded-lg bg-white/10 text-white w-full py-1.5">
                                    <p className="leading-none text-center text-gray-400">Max Level</p>
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