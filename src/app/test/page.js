"use client";

import React, { useEffect, useState } from 'react';
import './test.css';
// import SwitchButton from '@/component/share/switchButton/Switchbutton';

import FbSvg from '../../asset/fb.svg';
import TwitterSvg from '../../asset/twitter.svg';
import LinkedinSvg from '../../asset/linkedin.svg';
import YoutubeSvg from '../../asset/youtube.svg';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';

const Test = () => {
    const [zoomBackground, setZoomBackground] = useState(false);
    const [showDiv1, setShowDiv1] = useState(true);
    const [showDiv, setShowDiv] = useState(true);

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
        // transition: "background-size 1s ease",
    };

    const svgStyle = {
        filter: 'brightness(1.8)', // Adjust the brightness to control the hover effect
        cursor: 'pointer', // Optional: Change cursor on hover
        backgroundSize: "120%"
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
                    <nav className="fixed w-full z-50 bg-white border">
                        <div className=''>
                            <div className='w-full bg-[#333132] flex justify-center items-center'>
                                <div className="container">
                                    <div className='flex justify-between'>
                                        <div className='flex '>
                                            <button className='px-3 py-1.5 text-sm font-semibold text-white hover:bg-white hover:text-[#333333]'>Local</button>
                                            <button className='px-4 py-1 text-sm font-semibold text-white hover:bg-white hover:text-[#333333]'>Business</button>
                                        </div>

                                        <div className='flex gap-4 group justify-center items-center py-1'>
                                            <FaFacebook fontSize={20} className='text-white cursor-pointer hover:text-blue-800' />
                                            <FaXTwitter fontSize={20} className='text-white cursor-pointer hover:text-blue-800' />
                                            <FaLinkedin fontSize={20} className='text-white cursor-pointer hover:text-blue-800' />
                                            <FaYoutube fontSize={20} className='text-white cursor-pointer hover:text-blue-800' />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className=' w-full  flex justify-center items-center'>
                                <div className="container">
                                    <div className='flex justify-between'>
                                        <div className=''>Logo</div>
                                        <div>2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>

                    <div className="h-screen flex justify-center items-center bg-white text-black">
                        <div className="text-9xl font-[900]">
                            ABOUT
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Test;