"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import taskImg from "@/assets/fit/task.png";
import calendarImg from "@/assets/components/calendar.png";
import youtubeImg from "@/assets/socmed/youtube.png";
import twitterImg from "@/assets/socmed/twitter.png";
import telegramImg from "@/assets/socmed/telegram.png";

export default function Page() {
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
                    <Image src={taskImg} alt="Task Image" width={500} height={500} />
                    <div className="flex items-center justify-center space-x-2 mb-2">
                        <div>
                            <p className="text-center font-extrabold text-3xl">Get more coins!</p>
                            <p className="text-center text-sm text-gray-400 mb-2">Complete tasks to earn more coins and boost your progress!</p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Daily Reward</p>
                        <div className="mt-2 rounded-full bg-white/10 p-2 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="bg-white/1 border-4 border-white/10 rounded-full p-2 text-gray-white">
                                    <Image src={calendarImg} alt="" width={25} height={25} />
                                </div>
                                <p>Check Daily Reward!</p>
                            </div>
                            <div>
                                <button className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full py-2 px-4 text-gray-white">Go</button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Earnit Youtube</p>
                        <div className="mt-2 rounded-full bg-white/10 p-2 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="bg-white/1 border-4 border-white/10 rounded-full p-2 text-gray-white">
                                    <Image src={youtubeImg} alt="" width={25} height={25} />
                                </div>
                                <div>
                                    <p className="leading-none mt-1.5">What is Earnit?</p>
                                    <p className="flex text-sm items-center leading-snug text-yellow-500 font-bold"><svg className="w-4 h-4 max-w-fit mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z" /></svg>1,500</p>
                                </div>
                            </div>
                            <div>
                                <button className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full py-2 px-4 text-gray-white">Check</button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="font-semibold">Task</p>
                        <div className="mt-2 rounded-full bg-white/10 p-2 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="bg-white/1 border-4 border-white/10 rounded-full p-2 text-gray-white">
                                    <Image src={twitterImg} alt="" width={25} height={25} />
                                </div>
                                <div>
                                    <p className="leading-none mt-1.5">Follow twitter</p>
                                    <p className="flex text-sm items-center leading-snug text-yellow-500 font-bold"><svg className="w-4 h-4 max-w-fit mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z" /></svg>500</p>
                                </div>
                            </div>
                            <div>
                                <button className="bg-gradient-to-t from-purple-500 to-pink-500 rounded-full py-2 px-4 text-gray-white">Check</button>
                            </div>
                        </div>
                        <div className="mt-2 rounded-full bg-white/10 p-2 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="bg-white/1 border-4 border-white/10 rounded-full p-2 text-gray-white">
                                    <Image src={telegramImg} alt="" width={25} height={25} />
                                </div>
                                <div>
                                    <p className="leading-none mt-1.5">Follow telegram</p>
                                    <p className="flex text-sm items-center leading-snug text-yellow-500 font-bold"><svg className="w-4 h-4 max-w-fit mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M160 0c17.7 0 32 14.3 32 32l0 35.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11l0 33.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-34.9c-.4-.1-.9-.1-1.3-.2l-.2 0s0 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7s0 0 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11L128 32c0-17.7 14.3-32 32-32z" /></svg>500</p>
                                </div>
                            </div>
                            <div>
                                <button className="bg-white/10 rounded-full py-2 px-4 text-gray-400">
                                    <svg className="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" /></svg>
                                </button>
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