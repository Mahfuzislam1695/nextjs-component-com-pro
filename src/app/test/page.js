"use client";

import React, { useEffect, useState } from 'react';
import './test.css';
import { FaFacebook, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import Link from 'next/link';

const Test = () => {
    const [zoomBackground, setZoomBackground] = useState(false);
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv, setShowDiv] = useState(true);

    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const languages = ['English', 'Spanish', 'French', 'German'];

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const shouldBeVisible = scrollTop === 0;
            setIsNavbarVisible(shouldBeVisible);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        setZoomBackground(true);

        const timeoutId1 = setTimeout(() => {
            setZoomBackground(false);
        }, 1000);

        const timeoutId2 = setTimeout(() => {
            setShowDiv1(false);
        }, 1500);

        const timeoutId3 = setTimeout(() => {
            setShowDiv(false);
        }, 1000);

        return () => {
            clearTimeout(timeoutId1);
            clearTimeout(timeoutId2);
            clearTimeout(timeoutId3);
        };
    }, []);

    const backgroundImageStyle = {
        backgroundImage: "url(image1.jpg)",
        backgroundSize: zoomBackground ? "200%" : "75%",
    };

    const backgroundImageStyle1 = {
        backgroundImage: "url(nav.png)",
        // backgroundSize: zoomBackground ? "200%" : "75%",
    };

    return (
        <div>
            {showDiv1 ? (
                <div className="text-size font-[900] w-screen h-screen relative bg-black">
                    <div>
                        <div
                            className={`${showDiv
                                ? "ease-in-out duration-500 inset-0"
                                : "ease-in-out duration-500 inset-0  top-[-100vh]"
                                } absolute bg-clip-text bg-cover text-transparent flex justify-center items-center h-full w-full`} style={backgroundImageStyle}
                        >
                            ABOUT
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <nav className="fixed w-full z-50 bg-white">
                        <div className=''>
                            <div className='w-full bg-[#333132] flex justify-center items-center'>
                                <div className="container">
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <button className='px-3 py-1.5 text-sm font-semibold text-white hover:bg-white hover:text-[#333333]'>Local</button>
                                            <button className='px-4 py-1 text-sm font-semibold text-white hover:bg-white hover:text-[#333333]'>Business</button>
                                        </div>

                                        <div className='flex gap-4 justify-center items-center py-1'>
                                            <FaFacebook fontSize={20} className='text-white cursor-pointer hover:text-blue-800' />
                                            <FaXTwitter fontSize={20} className='text-white cursor-pointer hover:text-blue-800' />
                                            <FaLinkedin fontSize={20} className='text-white cursor-pointer hover:text-blue-800' />
                                            <FaYoutube fontSize={20} className='text-white cursor-pointer hover:text-blue-800' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-full bg-white flex justify-center items-center'>
                                <div className="container">
                                    <div className='flex justify-between'>
                                        <div className='flex'>
                                            <div className='text-5xl font-extrabold text-lime-950 z-10'>Logo</div>
                                        </div>

                                        <div className='flex gap-4 justify-center items-center py-1'>
                                            <div className='flex gap-4 justify-center items-center py-1 text-[#333333] text-sm font-medium'>
                                                <Link href={`/`} className="px-4 py-1 ">Home</Link>
                                                <Link href={`/`} className="px-4 py-1">About</Link>
                                                <Link href={`/`} className="px-4 py-1">Portfolio</Link>
                                                <Link href={`/`} className="px-4 py-1">Service</Link>
                                                <Link href={`/`} className="px-4 py-1">Blog</Link>
                                                <Link href={`/`} className="px-4 py-1">Career</Link>
                                                <Link href={`/`} className="px-4 py-1 border rounded-lg border-[#333333]">Contact Us</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='flex flex-row-reverse'><div className='w-[50%] '>
                                <div
                                    className={`toggleDiv1  ${isNavbarVisible ? "visible1" : "hidden1"} `}>
                                    <div className='relative bg-[#A02A34]' style={{ background: '' }}>
                                        {/* <div className='relative ' style={{ background: 'linear-gradient(90deg,white 50.2%, #A02A34 100%) ' }}> */}

                                        <div className='container'>
                                            <div className='flex justify-start text-white text-sm font-bold ' style={backgroundImageStyle1}>
                                                <div className='w-[40rem] flex justify-end items-center'>
                                                    <div className='pr-1'>
                                                        LN
                                                    </div>
                                                    <div className='p-2 text-[#333333]'>
                                                        <select
                                                            value={selectedLanguage}
                                                            onChange={(e) => setSelectedLanguage(e.target.value)}
                                                            className="border px-1 rounded-md focus:outline-none focus:ring focus:border-red-300 bg-transparent text-sm font-medium items-center text-white"
                                                        >
                                                            {languages.map((language) => (
                                                                <option className='text-[#333333]' key={language} value={language}>
                                                                    {language}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                            <div
                                                className='absolute top-0 left-[0] border-b-[2.25rem] w-10 border-transparent overflow-hidden'
                                                style={{
                                                    borderLeft: '2.25rem solid white',
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            </div>

                        </div>
                    </nav>

                    <div className="h-screen flex justify-center items-center  text-black bg-slate-200">
                        <div className="text-9xl font-[900]">
                            ABOUT


                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia a illo dicta? Omnis in consequuntur beatae eligendi pariatur, quidem nostrum laboriosam atque suscipit a modi ex. Rem temporibus ratione deleniti.
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Test;