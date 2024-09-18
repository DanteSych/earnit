"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import capsuleImg from "@/assets/capsule.png";

export default function Page() {
    const [IsCharge, setIsCharge] = useState(false);
    const [IsApprove, setIsApprove] = useState(false);
    return (
        <div className="relative bg-[#0d162e] pb-24 h-screen">
            <div className="flex flex-col h-screen z-50 w-full">
                <div className="p-5 h-full flex-grow flex flex-col overflow-y-auto z-50">
                    <div className="mt-4 mb-6 w-full z-50">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <svg className="w-6 h-6 rounded-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                                <p>Username</p>
                            </div>
                            <button onClick={() => { }} className="flex items-center space-x-1">
                                <p>Bronze</p>
                                <svg className="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                            </button>
                        </div>
                    </div>
                    <p className="text-center uppercase text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Earn</p>
                    <p className="text-gray-300 text-center mb-2">Watch your energy capsule fill up and claim your hourly profits as they accumulate.</p>
                    <Image className="w-[75%] mx-auto" src={capsuleImg} alt="" width={500} height={500} />
                    <div className="mt-3 rounded-xl backdrop-blur bg-white/10 p-2">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="text-center w-full">
                                <div className="bg-white/1 border-4 border-white/10 w-full rounded-xl py-1">
                                    <p className="text-xs text-gray-400">Your Tokens:</p>
                                    <p className="leading-snug">10,652,231</p>
                                </div>
                            </div>
                            <div className="text-center w-full">
                                <div className="bg-white/1 border-4 border-white/10 w-full rounded-xl py-1">
                                    <p className="text-xs text-gray-400">Profit perhour:</p>
                                    <p className="leading-snug">0,5</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            {IsCharge ?
                                <div>
                                    <Image className="w-20 h-auto my-3 mx-auto  spin-pause" src={capsuleImg} alt="" width={500} height={500} />
                                    <div className="mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl max-w-fit">
                                        <p className="text-white px-4 py-1">15h : 05m : 15s</p>
                                    </div>
                                </div>
                                :
                                <div>
                                    <p className="text-sm text-gray-300 text-center">For 24 hours, charging will begin with the current profit per hour.</p>
                                    <button onClick={() => { setIsCharge(true) }} className="mt-2 flex items-center justify-center w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2">Start Charging</button>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="mt-3">
                        <p className="font-semibold">Buy Charging Energy:</p>
                        <div className="mt-2 rounded-xl grid grid-cols-2 gap-2">
                            <div className="bg-white/10 backdrop-blur border-4 border-white/10 rounded-xl p-2">
                                <p className="font-semibold">Buy Bitcoin</p>
                                <hr className="border-2 border-white/10 my-3" />
                                <p className="text-gray-400 text-xs">Profit/hr: <span className="text-white text-sm">10 Coins</span></p>
                                {IsApprove ?
                                    <div className="flex items-center space-x-6">
                                        <button onClick={() => { setIsApprove(false) }} className="cursor-pointer text-sm mt-2 px-2 w-full rounded-lg bg-white/10 text-white w-full py-1.5 leading-none">Cancel</button>
                                        <button onClick={() => { setIsApprove(false) }} className="cursor-pointer text-sm mt-2 px-2 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full py-1.5 leading-none">Buy</button>
                                    </div>
                                    :
                                    <div onClick={() => { setIsApprove(true) }} className="cursor-pointer text-sm mt-2 flex items-center justify-between px-2 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white w-full py-1.5">
                                        <p className="leading-none">Lv. 1</p>
                                        <p className="leading-none"><span className="text-yellow-500">$</span> 5,000</p>
                                    </div>
                                }
                            </div>
                            <div className="bg-white/10 backdrop-blur border-4 border-white/10 rounded-xl p-2">
                                <p className="font-semibold">Buy TON</p>
                                <hr className="border-2 border-white/10 my-3" />
                                <p className="text-gray-400 text-xs">Profit/hr: <span className="text-white text-sm">10 Coins</span></p>
                                <div className="select-none text-sm mt-2 px-2 w-full rounded-lg bg-white/10 text-white w-full py-1.5">
                                    <p className="leading-none text-center text-gray-400">Buy Bitcoin required</p>
                                </div>
                            </div>
                            <div className="bg-white/10 backdrop-blur border-4 border-white/10 rounded-xl p-2">
                                <p className="font-semibold">KYC</p>
                                <hr className="border-2 border-white/10 my-3" />
                                <p className="text-gray-400 text-xs">Profit/hr: <span className="text-white text-sm">50 Coins</span></p>
                                <div className="select-none text-sm mt-2 px-2 w-full rounded-lg bg-white/10 text-white w-full py-1.5">
                                    <p className="leading-none text-center text-gray-400">Buy TON required</p>
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