import React from 'react';
import Image from "next/image";

const StartDownSection = () => {
    return  <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
    />
};

export default StartDownSection;
