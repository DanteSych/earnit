"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Page() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const leagues = [
        { league: "Bronze Level", maxCoins: 1000 },
        { league: "Silver Level", maxCoins: 3000 },
        { league: "Gold Level", maxCoins: 5000 }
    ];

    const handleSlideChange = (swiper: any) => {
        setCurrentSlide(swiper.activeIndex);
    };

    return (
        <div className="relative bg-[#0d162e] pb-24 h-screen">
            <div className="flex flex-col h-screen z-50 w-full">
                <div className="p-5 h-full flex-grow flex flex-col overflow-y-auto z-50">
                    <button onClick={() => { window.history.back(); }}>
                        <svg className="w-5 h-5 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
                    </button>
                    <div className="my-4">
                        <Swiper
                            slidesPerView={1}
                            navigation
                            onSlideChange={handleSlideChange}
                            modules={[Navigation]}
                        >
                            {leagues.map((league, index) => (
                                <SwiperSlide key={index}>
                                    <div className="p-10">
                                        <div className="card-profile my-10" style={{ backgroundColor: '#12abdc' }}>
                                            <p className="text-center text-3xl font-bold">{leagues[currentSlide].league}</p>
                                            <p className="text-center text-xl font-bold">100 / {leagues[currentSlide].maxCoins}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div>
                        <div className="w-full flex items-center space-x-2">
                            <p className="px-2">No</p>
                            <p className="px-2 w-full">User</p>
                            <p className="px-2">Amount</p>
                        </div>
                        <hr className="border-white/10" />
                        <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                            <p className="px-2 font-semibold bg-yellow-500 rounded-full">1</p>
                            <p className="px-2 w-full">John</p>
                            <p className="px-2">968</p>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                            <p className="px-2 font-semibold bg-[#C0C0C0] rounded-full">2</p>
                            <p className="px-2 w-full">James</p>
                            <p className="px-2">900</p>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                            <p className="px-2 font-semibold bg-[#CD7F32] rounded-full">3</p>
                            <p className="px-2 w-full">Jude</p>
                            <p className="px-2">860</p>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                            <p className="px-2 font-semibold">4</p>
                            <p className="px-2 w-full">Jhonny</p>
                            <p className="px-2">820</p>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                            <p className="px-2 font-semibold">5</p>
                            <p className="px-2 w-full">Jess</p>
                            <p className="px-2">750</p>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                            <p className="px-2 font-semibold">6</p>
                            <p className="px-2 w-full">Josh</p>
                            <p className="px-2">655</p>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                            <p className="px-2 font-semibold">7</p>
                            <p className="px-2 w-full">Jeff</p>
                            <p className="px-2">521</p>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                            <p className="px-2 font-semibold">8</p>
                            <p className="px-2 w-full">Juan</p>
                            <p className="px-2">455</p>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                            <p className="px-2 font-semibold">9</p>
                            <p className="px-2 w-full">Jenn</p>
                            <p className="px-2">320</p>
                        </div>
                        <div className="w-full flex items-center space-x-2 mt-2 bg-gradient-to-r from-cyan-800 to-blue-500 drop-shadow-lg py-1.5 px-2 rounded-full backdrop-blur">
                            <p className="px-2 font-semibold">10</p>
                            <p className="px-2 w-full">Jorge</p>
                            <p className="px-2">120</p>
                        </div>
                    </div>
                </div>
                <Navbar />
            </div>
            <div className="absolute bg-gradient-to-t from-cyan-500 via-cyan-500/50 to-cyan-500/0 bottom-0 left-0 w-full h-56"></div>
        </div>
    )
}