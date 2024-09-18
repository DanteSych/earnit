"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import aidropImg from "@/assets/fit/airdrop.png";
import tonImg from "@/assets/components/ton.png";

export default function Page() {
    return (
        <div className="relative bg-[#0d162e] pb-24 h-screen">
            <div className="flex flex-col h-screen z-50 w-full">
                <div className="p-5 mt-4 mb-6 w-full z-50">
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
                <div className="p-5 h-full flex-grow flex flex-col overflow-y-auto z-50">
                    <Image src={aidropImg} alt="" width={500} height={500} />
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <div>
                            <p className="text-center font-extrabold text-3xl">Airdrop</p>
                            <p className="text-center font-extrabold text-3xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                                To Be Announce
                            </p>
                            <p className="text-center text-gray-400 my-2">Prepare yourself for the upcoming airdrop launch!</p>
                        </div>
                    </div>
                    <div className="mt-6 shadow-lg cursor-pointer bg-cyan-600 uppercase rounded-full font-black p-3 flex items-center">
                        <Image className="mr-3" src={tonImg} alt="ton" width={45} height={45} />
                        <p className="font-extrabold text-sm">Connect Your Wallet</p>
                    </div>
                </div>
                <Navbar />
            </div>
            <div className="absolute bg-gradient-to-t from-cyan-500 via-cyan-500/50 to-cyan-500/0 bottom-0 left-0 w-full h-56"></div>
        </div>
    )
}