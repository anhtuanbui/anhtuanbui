"use client"

import Image from 'next/image';
import React from 'react';

import Marquee from "react-fast-marquee";

interface LogoCarouselProps {
    speed?: number;
    spacing?: number;
    logoHeight?: number;
    logos?: Logo[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({
    speed = 50000,
    spacing = 64,
    logoHeight = 40,
    logos: externalLogos
}) => {

    // Default logos - replace with your actual logo data
    const defaultLogos: Logo[] = [
        {
            id: 1,
            imageUrl: "/logos/google.svg",
            alt: "Google",
            width: 120,
            height: 40
        },
        {
            id: 2,
            imageUrl: "/logos/microsoft.svg",
            alt: "Microsoft",
            width: 120,
            height: 40
        },
        {
            id: 3,
            imageUrl: "/logos/apple.svg",
            alt: "Apple",
            width: 120,
            height: 40
        },
        {
            id: 4,
            imageUrl: "/logos/amazon.svg",
            alt: "Amazon",
            width: 120,
            height: 40
        },
        {
            id: 5,
            imageUrl: "/logos/meta.svg",
            alt: "Meta",
            width: 120,
            height: 40
        }
    ];

    const logos = externalLogos || defaultLogos;
    // Triple the logos to create seamless infinite scroll
    const extendedLogos = [...logos];

    return (
        <div className="w-full relative">
            {/* Gradient overlay on left */}
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#EFEFEF] to-transparent z-10" />
            <Marquee speed={speed} autoFill={true}>
                {extendedLogos.map((logo, index) => (
                    // <img src={logo.imageUrl} className='w-12 mx-12' alt={logo.alt} key={index}/>
                    <Image
                        key={index}
                        src={logo.imageUrl}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        // style={{ margin: "0px 40px" }}
                        className={`mx-${spacing}`}
                        loading='eager'
                    />

                ))}
            </Marquee>

            {/* Gradient overlay on right */}
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#EFEFEF] to-transparent z-10" />
        </div>
    );
};

export default LogoCarousel;