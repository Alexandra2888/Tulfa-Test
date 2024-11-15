import { Maximize } from "lucide-react";
import { useState, useEffect } from "react";
import GalleryModal from "./GalleryModal";
import Title from "../../atoms/Title/Title";
import Description from "../../atoms/Description/Description";
import Button from "../../atoms/Button/Button";
import useZoom from "../../hooks/useZoom.js";

const CloseUpShots = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const scale = useZoom({
        startScale: 1.5,
        endScale: 1,
        scrollStart: 0,
        scrollEnd: 0.75
    });

    return (
        <div>
            {/* Header */}
            <div className="h-fit px-4 flex justify-center pt-12 lg:pt-24">
                <Title text="Close Up Shots"/>
            </div>

            {/* Parallax section */}
            <div className="scroll-section relative ">
                <div className="sticky top-0 w-full h-screen">
                    <div className="relative w-full h-full">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-4/5 overflow-hidden">
                                <img
                                    src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231286/tulfa/Close%20Up%20Shots/view-of-a-modern-lounge-room-2023-11-28-03-19-28-utc_q38uc1.jpg"
                                    alt="Couch close-up"
                                    className="absolute w-full h-full object-cover origin-contain transition-transform duration-300 ease-out"
                                    style={{
                                        transform: `scale(${scale})`,
                                    }}
                                />
                            </div>
                        </div>

                        {/* Button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-4/5 overflow-hidden">
                                <img
                                    src="https://res.cloudinary.com/dnpjmrdik/image/upload/v1731231286/tulfa/Close%20Up%20Shots/view-of-a-modern-lounge-room-2023-11-28-03-19-28-utc_q38uc1.jpg"
                                    alt="Couch close-up"
                                    className="absolute w-full h-full object-cover origin-contain transition-transform duration-300 ease-out"
                                    style={{
                                        transform: `scale(${scale})`,
                                    }}
                                />
                                {/* Button overlay - moved inside image container */}
                                <div
                                    className="absolute inset-x-0 bottom-4 z-10 flex justify-center pointer-events-none">
                                    <div className="pointer-events-auto">
                                        <Button
                                            onClick={() => setIsModalOpen(true)}
                                            className="group flex items-center gap-2 px-3 py-1.5 bg-black/80 hover:bg-black/90 rounded-full text-white text-sm"
                                        >
                                            Take a closer look
                                            <div className="bg-red-500 rounded-full p-1">
                                                <Maximize className="w-3 h-3"/>
                                            </div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Description section */}
                <div className="relative z-10 bg-white w-full">
                    <div className="w-full mx-auto px-4 xl:px-0">
                        <Description
                            text="Give your customers a clear view of how your furniture fits into their space with precise dimensions and scale indicators."
                        />
                    </div>
                </div>

                {/* Modal */}
                <GalleryModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
            );
            };

            export default CloseUpShots;