"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import aidropImg from "@/assets/fit/airdrop.png";
import tonImg from "@/assets/components/ton.png";
import Header from "@/components/Header";

export default function Page() {
    return (
        <div className="relative bg-[#0d162e] pb-24 h-screen">
            <div className="flex flex-col h-screen z-50 w-full">
                <div className="p-5">
                    <Header />
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