"use client";

import React, { useEffect, useState } from 'react';
import './test.css';

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

    // <div
    //   className={`${isSidebarVisible
    //     ? "ease-in-out duration-500 left-0"
    //     : "ease-in-out duration-500 left-[-18rem]"
    //     } print:hidden bg-white text-[#4F46E5] h-screen fixed w-72 z-40 overflow-auto p-2 border scrollbar`}
    // ></div>

    return (
        <div>
            {/* <div className="h-screen flex justify-center items-center">
                <div className="text-9xl font-[900]">
                

                    <div
                        className={`${showDiv
                            ? "ease-in-out duration-500 left-0"
                            : "ease-in-out duration-500 left-[-40rem]"
                            } fixed bg-clip-text bg-cover text-transparent`} style={backgroundImageStyle}
                    > ABOUT</div>



                    <div className="h-screen flex justify-center items-center bg-white text-black">
                        <div className="text-9xl font-[900]">
                            ABOUT
                        </div>
                    </div>

                </div>
            </div> */}
            {showDiv1 ? (
                // <div className="h-screen flex justify-center items-center">
                <div className="text-size font-[900] w-screen h-screen relative">

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
                // </div>
            ) : (
                <div className="h-screen flex justify-center items-center bg-white text-black">
                    <div className="text-9xl font-[900]">
                        ABOUT
                    </div>
                </div>
            )}
        </div>
    );
};

export default Test;



// const Test = () => {
//     const [zoomBackground, setZoomBackground] = useState(false);
//     const [showDiv1, setShowDiv1] = useState(true);
//     const [showDiv, setShowDiv] = useState(true);

//     useEffect(() => {
//         setZoomBackground(true);

//         const timeoutId1 = setTimeout(() => {
//             setZoomBackground(false);
//         }, 800);

//         const timeoutId2 = setTimeout(() => {
//             setShowDiv1(false);
//         }, 1500);

//         const timeoutId3 = setTimeout(() => {
//             setShowDiv(false);
//         }, 800);

//         return () => {
//             clearTimeout(timeoutId1);
//             clearTimeout(timeoutId2);
//             clearTimeout(timeoutId3);
//         };
//     }, []);

//     const backgroundImageStyle = {
//         backgroundImage: "url(image1.jpg)",
//         backgroundSize: zoomBackground ? "300%" : "75%", // Adjust the size of the background image
//         transition: "background-size 1s ease", // Add a smooth transition effect
//     };

//     const aboutTextStyle = {
//         transform: showDiv ? 'translateY(0)' : 'translateY(-100%)', // Lift up when showDiv is false
//         transition: "transform 0.8s ease", // Add a smooth transition effect
//     };

//     return (
//         <div>
//             {showDiv1 ? (
//                 <div className="h-screen flex justify-center items-center">
//                     <div className="text-9xl font-[900]">
//                         {showDiv && (
//                             <span className={`bg-clip-text text-transparent bg-cover text-size`} style={{ ...backgroundImageStyle, ...aboutTextStyle }}>
//                                 ABOUT
//                             </span>
//                         )}
//                     </div>
//                 </div>
//             ) : (
//                 <div className="h-screen flex justify-center items-center bg-white text-black">
//                     <div className="text-9xl font-[900] ">
//                         ABOUT
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Test;